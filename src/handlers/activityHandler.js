const {
  getAllActivity,
  createActivity,
  getActivityById,
  filterActivity
} = require("../controllers/users/activity/activity");

const getAllActivityHandler = async (req, res) => {
  try {
    const AllActivity = await getAllActivity();
    res.status(200).json(AllActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  try {
    const { name, duration, img, description, type, price } = req.body;
    const newActivity = await createActivity(name, duration, img, description, type, price);
    res.status(200).json(newActivity);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const getActivityByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newActivity = await getActivityById(id);
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
;
const filterActivityHandler = async (req, res) => {
  try {
    const { type, priceMin, priceMax, durationMin, durationMax } = req.body;
    const filterActivities = await filterActivity(type, priceMin, priceMax, durationMin, durationMax);
    res.status(200).json(filterActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllActivityHandler,
  createActivityHandler,
  getActivityByIdHandler,
  filterActivityHandler
};
