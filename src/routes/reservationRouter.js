const {Router} = require("express");
const { postReservationHandler, getAllReservationHandler, getReservationByUserIdHandler} = require("../handlers/reservationsHandler");
const  reservationRouter = Router();

reservationRouter.post("/", postReservationHandler)
reservationRouter.get("/", getAllReservationHandler)
reservationRouter.get("/:userId", getReservationByUserIdHandler)

module.exports = reservationRouter;
