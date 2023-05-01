const { Router } = require("express");
const router = Router();

//importamos los routers
const packageRouter = require("./packageRouter")
const userRouter = require("./userRouter")
const activityRouter = require("./activityRouter");
const hotelRouter = require("./hotelRouter");
const commentsRouter = require("./commentsRouter")
const restaurantRouter = require("./restaurantRouter")
const reservationRouter = require("./reservationRouter")

// Configurar los routers

//User 
router.use("/user", userRouter)

//Package
router.use("/package", packageRouter)

//Activity
router.use("/activity", activityRouter)

//Hotel
router.use("/hotel", hotelRouter)

//Comments
router.use("/comments", commentsRouter)

//Restaurant
router.use("/restaurant", restaurantRouter)

//Reservations
router.use("/reservation", reservationRouter)

module.exports = router;