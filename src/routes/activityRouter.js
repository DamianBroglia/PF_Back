const { Router } = require("express");
const {
  createActivityHandler,
  getAllActivityHandler,
  getActivityByIdHandler,
  filterActivityHandler,
  borrarActi
} = require("../handlers/activityHandler");
const activityRouter = Router();

activityRouter.post("/", createActivityHandler);

activityRouter.get("/", getAllActivityHandler);

activityRouter.get("/byId/:id", getActivityByIdHandler);

activityRouter.post("/filter", filterActivityHandler);

activityRouter.put("/delete", borrarActi);

module.exports = activityRouter;
