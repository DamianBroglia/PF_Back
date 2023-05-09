const {Router} = require ("express");
const {
    createHotelHandler,
    getAllHotelHandler,
    getHotelByIdHandler,
    filterHotelHandler
} = require("../handlers/hotelHandlers");
const hotelRouter =Router();


hotelRouter.post("/",  createHotelHandler);

hotelRouter.get("/", getAllHotelHandler);

hotelRouter.get("/byId/:id", getHotelByIdHandler);

hotelRouter.post("/filter", filterHotelHandler)

module.exports =hotelRouter;