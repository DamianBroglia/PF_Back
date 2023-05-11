const {Router} = require("express");
const { postReservationHandler, getAllReservationHandler, getReservationByUserIdHandler, getReservationForThisWeekHandler} = require("../handlers/reservationsHandler");
const  reservationRouter = Router();

reservationRouter.post("/", postReservationHandler)
reservationRouter.get("/", getAllReservationHandler)
reservationRouter.get("/ForThisWeek", getReservationForThisWeekHandler)
reservationRouter.get("/ByUserId/:userId", getReservationByUserIdHandler)


module.exports = reservationRouter;
