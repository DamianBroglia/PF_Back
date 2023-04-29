const { Router } = require("express");
const {
  createActivityHandler,
  getAllActivityHandler,
  getActivityByIdHandler,
  filterActivityHandler
} = require("../handlers/activityHandler");
const activityRouter = Router();

activityRouter.post("/", createActivityHandler);

activityRouter.get("/", getAllActivityHandler);

activityRouter.get("/byId/:id", getActivityByIdHandler);

activityRouter.get("/filter", filterActivityHandler)

module.exports = activityRouter;
