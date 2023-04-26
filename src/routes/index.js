const { Router } = require("express");
// const { postUser } = require("../controllers/users/postUser")
// const { getUser } = require("../controllers/users/getUser")
const router = Router();
//importamos los routers
const packageRouter = require("./packageRouter")
const userRouter = require("./userRouter")
const userGet  = require("./userRouter")
const activityRouter = require("./activityRouter");
const hotelRouter = require("./hotelRouter");

// Configurar los routers
//User 
router.use("/user", userRouter)
// router.post("/user", postUser)
// router.get("/user/:userId", getUser)

//Package
router.use("/package", packageRouter)

//Activity
router.use("/activity", activityRouter)

//Hotel
router.use("/hotel", hotelRouter)

module.exports = router;