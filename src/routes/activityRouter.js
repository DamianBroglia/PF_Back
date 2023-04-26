const { Router } = require("express");
const {
  createActivityHandler,
  getAllActivityHandler,
} = require("../handlers/activityHandler");
const activityRouter = Router();

activityRouter.post("/", createActivityHandler);

activityRouter.get("/", getAllActivityHandler);

module.exports = activityRouter;
