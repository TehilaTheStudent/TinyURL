import chartsController from "../controllers/chartsContoller.js";
import express from "express"
import middlewaresObject from "../middlewares/midllewares.js";
const chartsRouter=express.Router()

chartsRouter.get("/link/:id",chartsController.getChartByLinkId)
//for user
chartsRouter.get("/user", middlewaresObject.authenticateUser, chartsController.getChartByUserId)
//for admin
chartsRouter.get("/user/:id",middlewaresObject.authenticateAdmin,middlewaresObject.putRouteIdAsUserId, chartsController.getChartByUserId)
//for admin
chartsRouter.get('/users',middlewaresObject.authenticateAdmin,chartsController.getChartForUsers)

export default chartsRouter