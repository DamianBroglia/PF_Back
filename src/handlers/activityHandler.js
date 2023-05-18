const {
  getAllActivity,
  createActivity,
  getActivityById,
  filterActivity,
  borrarActivity
} = require("../controllers/users/activity/activity");
const cloudinary = require("../utils/cloudinary");

const getAllActivityHandler = async (req, res) => {
  try {
    const AllActivity = await getAllActivity();
    const activityDeleted = AllActivity.filter((elem) => elem.name !== "borrado");
    const name = req.query.hasOwnProperty("name") ? req.query.name.toLowerCase() : null;
    if (name){
      let filteredActivityByName =activityDeleted.filter((e) => 
          e.name.toLowerCase().includes(name)
      );
      filteredActivityByName.length > 0 
          ? res.status(200).send(filteredActivityByName)
          : res.status(404).send("The activity do not exists");
  } else {
      res.status(200).send(activityDeleted);
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  try {
    const { name, duration, img, description, typeAct, price } = req.body;
    
    
    const subir = async (img) => {
      const promesas = img.map((imagen) => {
        return cloudinary.uploader.upload(imagen, {
          upload_preset: "patagonia",
          folder: "patagonia/activities"
        });
      });

      return Promise.all(promesas)
        .then((resultados) => resultados.map((resultado) => resultado.url))
        .catch((err) => {
          console.log(err);
          throw err; // Lanzar el error para que se maneje en el catch
        });
    };
   
    const imgUrl = await subir(img);
    console.log(imgUrl);
      const newActivity = await createActivity(name, duration,imgUrl, description, typeAct, price);

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

const borrarActi = async (req,res) => {
  try {
    const {id} = req.body;
    const borrada = await borrarActivity(id);
    res.status(200).json(borrada);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  getAllActivityHandler,
  createActivityHandler,
  getActivityByIdHandler,
  filterActivityHandler,
  borrarActi
};
