import express from "express"
import redirectController from "../controllers/redirectController.js"

const  redirectRouter=express.Router()

redirectRouter.get("/:id",redirectController.redirectByLinkId)

export default redirectRouter