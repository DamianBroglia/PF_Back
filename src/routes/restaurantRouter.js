const {Router} = require("express");
const restaurantRouter = Router();
const {postRestaurantHandler} = require("../handlers/restaurantHandler")
const {getRestaurantsHanlder} = require("../handlers/restaurantHandler")


restaurantRouter.post("/", postRestaurantHandler)

restaurantRouter.get("/", getRestaurantsHanlder)

module.exports = restaurantRouter;