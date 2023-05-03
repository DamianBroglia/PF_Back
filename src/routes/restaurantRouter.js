const { Router } = require("express");
const restaurantRouter = Router();
const { postRestaurantHandler,
    getRestaurantsHanlder,
    getRestaurantByIdHanlder,
    filterRestaurantHanlder } = require("../handlers/restaurantHandler")



restaurantRouter.post("/", postRestaurantHandler)

restaurantRouter.get("/", getRestaurantsHanlder)

restaurantRouter.get("/byId/:id", getRestaurantByIdHanlder)

restaurantRouter.get("/filter", filterRestaurantHanlder)

module.exports = restaurantRouter;