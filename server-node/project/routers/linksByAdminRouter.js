import express from "express"
import linksController from "../controllers/linksController.js"
import middlewaresObject from "../middlewares/midllewares.js"

const linksByAdminRouter=express.Router()
//   links
linksByAdminRouter.get("",linksController.getAll)

linksByAdminRouter.get("/user/:id",middlewaresObject.putRouteIdAsUserId, linksController.getLinksByUserIdFromUserId)


linksByAdminRouter.get("/:id", linksController.getLinkByLinkId)



export default linksByAdminRouter
