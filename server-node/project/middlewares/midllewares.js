import crypto from "crypto"
import jsonwebtoken from 'jsonwebtoken'
import userModel from "../models/userModel.js"
import fs from "fs"
import e from "cors"
import { request } from "http"

const middlewaresObject = {
    getUuid: (request, respone, next) => {
        console.log("uuid middleware!")
        const uuid = crypto.randomUUID();
        request.uuid = uuid;
        next();
    },
    login: async (requst, response) => {
        console.log("login ")
        const email = requst.body.email
        const password = requst.body.password
        if (email == "a" && password == "a") {
            const jsonObject = { role: "admin", id: "".padEnd(24, ' ') }
            const token = jsonwebtoken.sign(jsonObject, "my secret string")
            response.send({ token: token,role:'admin' })
        }
        else {
            const userByCredentails = await userModel.findOne({ email: email, password: password })

            if (userByCredentails != undefined) {
                //TODO
                const jsonObject = { id: userByCredentails._id, role: "user" }
                const token = jsonwebtoken.sign(jsonObject, "my secret string")
                response.send({ token: token,role: 'user'})
            }
            else {
                response.status(401).send('no such user with email: ' + email + " and password: " + password)
            }
        }


    },
    auth: (request, response, next) => {
        console.log("auth")
        try {
            const authorizationHeader = request.headers?.authorization
            const token = authorizationHeader.slice(7)
            const jsonObject = jsonwebtoken.verify(token, "my secret string")
            request.userId = jsonObject.id
            request.role = jsonObject.role
            next()
        }
        catch {
            response.status(401).send('auth failed')
        }
    },
    writeToLog: (request, response, next) => {
        let text = ''
        if (request.url == '/login' || (request.url == "/users" && request.method == "POST")) {//login or add new user
            text = new Date().toGMTString() + "  : " + request.uuid + " : " + "".padEnd(5, ' ') + " : " + "".padEnd(24, ' ') + " : " + request.method.padEnd(6, ' ') + " : " + request.url + '\n';
            fs.appendFile("log.txt", text, () => {
                next();
            })
        }
        else {
            if (request.userId == undefined) {//before auth
                next()
            }
            else {
                text = new Date().toGMTString() + "  : " + request.uuid + " : " + request.role.padEnd(5, ' ') + " : " + request.userId + " : " + request.method.padEnd(6, ' ') + " : " + request.url + '\n';
                fs.appendFile("log.txt", text, () => {
                    next();
                })
            }
        }
    },
    authenticateAdmin: (request, response, next) => {
        console.log('authenticateAdmin middleware')
        if (request.role == "admin") {
            next()
        } else {
            response.status(401).send("authentcation error\nthe endpoint you are trying to reach is for admin only")
        }
    },
    authenticateUser: (request, response, next) => {
        if (request.role == 'user') {
            next()
        }
        else {
            response.status(401).send("authentcation error\nthe endpoint you are trying to reach is for user only")

        }
    },
    putRouteIdAsUserId: (request, response, next) => {
        request.userId = request.params.id
        next()
    },

}
export default middlewaresObject