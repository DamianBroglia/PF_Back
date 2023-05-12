const {Router} = require("express");
// const router = express.Router();
const {postUserHandler} = require("../handlers/userHandler")
const {getUserByIdHandler} = require("../handlers/userHandler")
const {getUserNotificationHandler} = require("../handlers/userHandler")
const userRouter = Router();

// router.post("/", postUser)
userRouter.post("/", postUserHandler);
userRouter.get("/notification", getUserNotificationHandler);
userRouter.get("/:id", getUserByIdHandler);

module.exports = userRouter;