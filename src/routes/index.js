const { Router } = require("express");
// const { postUser } = require("../controllers/users/postUser")
// const { getUser } = require("../controllers/users/getUser")
const router = Router();
//importamos los routers
const packageRouter = require("./packageRouter")
const userRouter = require("./userRouter")
const userGet  = require("./userRouter")

// Configurar los routers
//User 
router.use("/user", userRouter)
// router.post("/user", postUser)
// router.get("/user/:userId", getUser)

//Package
router.use("/package", packageRouter)

module.exports = router;