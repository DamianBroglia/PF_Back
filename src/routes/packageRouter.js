const {Router} = require("express");
const { postPackageHandler, getPackageHandler, getPackageFiltered, getPackageByIdHandler} = require("../handlers/packageHandlers");
const  pacakgeRouter = Router();

pacakgeRouter.post("/", postPackageHandler)
pacakgeRouter.get("/", getPackageHandler)
pacakgeRouter.post("/filter", getPackageFiltered)
pacakgeRouter.get("/:id", getPackageByIdHandler)

module.exports = pacakgeRouter;

