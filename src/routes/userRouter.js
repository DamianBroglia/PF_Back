const {Router} = require("express");
// const router = express.Router();
const { postUser } = require("../controllers/users/postUser.js")
const {getUser} = require("../controllers/users/getUser.js")
const userRouter = Router();

// router.post("/", postUser)
userRouter.post("/", postUser);
userRouter.get("/:id", getUser);

module.exports = userRouter;