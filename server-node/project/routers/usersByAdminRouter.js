import express from "express"
import usersController from "../controllers/usersController.js"
import userController from "../controllers/userController.js"
import middlewaresObject from "../middlewares/midllewares.js" 

const usersByAdminRouter = express.Router()

usersByAdminRouter.get("", usersController.getAll)
usersByAdminRouter.get("/:id", usersController.getByIdFromRoute)
usersByAdminRouter.delete("/:id",middlewaresObject.putRouteIdAsUserId,  userController.deleteByIdFromToken)
usersByAdminRouter.put("/:id",middlewaresObject.putRouteIdAsUserId,  userController.putByIdFromToken)


export default usersByAdminRouter
