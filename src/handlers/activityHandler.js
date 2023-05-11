const {
  getAllActivity,
  createActivity,
  getActivityById,
  filterActivity
} = require("../controllers/users/activity/activity");
const cloudinary = require("../utils/cloudinary");

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
      res.status(200).send(AllActivity)
  }


  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  try {
    const { name, duration, img, description, typeAct, price } = req.body;
    
      const newActivity = await createActivity(name, duration,img, description, typeAct, price);
      
  for(let i=0; i < img.length; i++) {
      const uploadRes = cloudinary.uploader.upload(img[i], {
      upload_preset: "patagonia",
      folder: "patagonia/activities"
    })
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
    }).catch((err) => {
      console.log(err);
    })
    }
  
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
    const { activities, filter} = req.body;
    const filterActivities = await filterActivity(activities.activities, filter);
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
