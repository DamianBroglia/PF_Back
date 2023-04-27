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

const commentsRouter = require("./commentsRouter")

const restaurantRouter = require("./restaurantRouter")


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


//Comments
router.use("/comments", commentsRouter)

//Restaurant
router.use("/restaurant", restaurantRouter)



module.exports = router;