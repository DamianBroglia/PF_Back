const {Router} = require("express");
const { postPackageHandler, getPackageHandler, getPackageFiltered} = require("../handlers/packageHandlers");
const  pacakgeRouter = Router();

pacakgeRouter.post("/", postPackageHandler)
pacakgeRouter.get("/", getPackageHandler)
pacakgeRouter.get("/fiter", getPackageFiltered)
module.exports = pacakgeRouter;

