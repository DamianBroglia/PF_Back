const { Router } = require("express");
const { postUser } = require("../controllers/users/postUser")

const router = Router();

// Configurar los routers
router.post("/user", postUser)

module.exports = router;