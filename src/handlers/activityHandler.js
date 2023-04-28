const {
  getAllActivity,
  createActivity,
} = require("../controllers/users/activity/activity");

const getAllActivityHandler = async (req, res) => {
  try {
    const AllActivity = await getAllActivity();
    const name = req.query.hasOwnProperty("name") ? req.query.name.toLowerCase() : null;
    if (name){
      let filteredActivityByName =AllActivity.filter((e) => 
          e.name.toLowerCase().includes(name)
      );
      filteredActivityByName.length > 0 
          ? res.status(200).send(filteredActivityByName)
          : res.status(404).send("The activity do not exists");
  } else {
      res.status(200).send(packages)
  }


  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  try {
    const { name, duration, img, description } = req.body;
    const newActivity = await createActivity(name, duration, img, description);
    res.status(200).json(newActivity);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllActivityHandler,
  createActivityHandler,
};
