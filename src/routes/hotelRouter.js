const {Router} = require ("express");
const {
    createHotelHandler,
    getAllHotelHandler,
} = require("../handlers/hotelHandlers");
const hotelRouter =Router();


hotelRouter.post("/",  createHotelHandler);

hotelRouter.get("/", getAllHotelHandler);

module.exports =hotelRouter;