import express from 'express'
import connectDB from './database.js'
import usersByAdminRouter from './routers/usersByAdminRouter.js'
import userByUserRouter from './routers/userByUserRouter.js'
import middlewaresObject from './middlewares/midllewares.js'
import cors from "cors"
import bodyParser from "body-parser"
import linksByAdminRouter from './routers/linksByAdminRouter.js'
import linksByUserRouter from './routers/linksByUserRouter.js'
import userController from './controllers/userController.js'
import redirectRouter from './routers/redirectRouter.js'
import sourcesRouter from './routers/sourcesRouter.js'
import chartsRouter from './routers/chartsRouter.js'
const app = express()

connectDB()

app.use(cors())
app.use(bodyParser.json())

app.use("/smallUrl",redirectRouter)

app.use(middlewaresObject.getUuid)
app.use(middlewaresObject.writeToLog)

app.post('/login', middlewaresObject.login)
app.post('/users', userController.post)


app.use(middlewaresObject.auth)
app.use(middlewaresObject.writeToLog)

app.use("/users", middlewaresObject.authenticateAdmin, usersByAdminRouter)
app.use("/user", middlewaresObject.authenticateUser, userByUserRouter)
app.use("/links",middlewaresObject.authenticateAdmin, linksByAdminRouter)
app.use("/user/links",middlewaresObject.authenticateUser, linksByUserRouter)
app.use("/user/links",middlewaresObject.authenticateUser,sourcesRouter)
app.use("/charts",chartsRouter)

// app.get("/", (request, response) => {
//     response.send("a get endpoint on / ")
// })
app.listen(5000, () => {
    console.log("app is running on http://localhost:5000")
})