const { Router } = require("express");
const { postUser } = require("../controllers/users/postUser")
const { getUser } = require("../controllers/users/getUser")

const router = Router();

// Configurar los routers
router.post("/user", postUser)
router.get("/user/:userId", getUser)

module.exports = router;