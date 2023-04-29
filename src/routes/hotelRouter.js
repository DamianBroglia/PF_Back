const {Router} = require ("express");
const {
    createHotelHandler,
    getAllHotelHandler,
    getHotelByIdHandler
} = require("../handlers/hotelHandlers");
const hotelRouter =Router();


hotelRouter.post("/",  createHotelHandler);

hotelRouter.get("/", getAllHotelHandler);

hotelRouter.get("/:id", getHotelByIdHandler);

module.exports =hotelRouter;