import express from "express"
import sourcesController from "../controllers/sourcesController.js"

const sourcesRouter=express.Router()

sourcesRouter.post("/:id/sources",sourcesController.postSourceToLink)

export default sourcesRouter