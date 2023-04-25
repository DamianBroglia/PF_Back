const express = require("express");
const router = express.Router();
const { postUser } = require("../controllers/users/postUser.js")


router.post("/user", postUser)


module.exports = router;