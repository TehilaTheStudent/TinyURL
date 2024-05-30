import express from "express"
import userController from "../controllers/userController.js"

const userByUserRouter = express.Router()

userByUserRouter.get("", userController.getByIdFromToken)

userByUserRouter.put("",userController.putByIdFromToken)
userByUserRouter.delete("",userController.deleteByIdFromToken)

export default userByUserRouter