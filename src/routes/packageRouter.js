const {Router} = require("express");
const { postPackage } = require("../controllers/users/postPackage");
const  pacakgeRouter = Router();

pacakgeRouter.post("/", postPackage)

module.exports = pacakgeRouter;

