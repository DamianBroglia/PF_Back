const {Router} = require("express");
const { postPackageHandler, getPackageHandler} = require("../handlers/packageHandlers");
const  pacakgeRouter = Router();

pacakgeRouter.post("/", postPackageHandler)
pacakgeRouter.get("/", getPackageHandler)

module.exports = pacakgeRouter;

