const { Router } = require("express");
const restaurantRouter = Router();
const { postRestaurantHandler,
    getRestaurantsHanlder,
    getRestaurantByIdHanlder } = require("../handlers/restaurantHandler")



restaurantRouter.post("/", postRestaurantHandler)

restaurantRouter.get("/", getRestaurantsHanlder)

restaurantRouter.get("/:id", getRestaurantByIdHanlder)

module.exports = restaurantRouter;