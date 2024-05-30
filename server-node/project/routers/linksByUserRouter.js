import express from "express"
import linksController from "../controllers/linksController.js"


const linksByUserRouter=express.Router()
//   user/links
linksByUserRouter.get("",linksController.getLinksByUserIdFromUserId)

linksByUserRouter.get("/:id",linksController.getLinkByLinkIdFromUserId)


linksByUserRouter.post("",linksController.postToIdByUserId)

linksByUserRouter.put("/:id",linksController.putToIdByUserId)

linksByUserRouter.delete("/:id",linksController.deleteToIdByUserId)



export default linksByUserRouter
