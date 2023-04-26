const {Router} = require("express");
const { postPackageHandler } = require("../handlers/packageHandlers");
const  pacakgeRouter = Router();

pacakgeRouter.post("/", postPackageHandler)

module.exports = pacakgeRouter;

