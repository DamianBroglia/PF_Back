const {
  getRestaurant,
} = require("../controllers/users/restaurant/getRestaurants");
const {
  postRestaurant,
} = require("../controllers/users/restaurant/postRestaurant");
const {
  getRestaurantById,
} = require("../controllers/users/restaurant/getRestaurantById");
const {
  filterRestaurant,
} = require("../controllers/users/restaurant/filterRestaurant");
const cloudinary = require("../utils/cloudinary");

const postRestaurantHandler = async (req, res) => {
  try {
    const { name, location, img, description, price } = req.body;
    
    const subir = async (img) => {
      const promesas = img.map((imagen) => {
        return cloudinary.uploader.upload(imagen, {
          upload_preset: "patagonia",
          folder: "patagonia/restaurant"
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
    const newRestaurant = await postRestaurant(
      name,
      location,
      imgUrl,
      description,
      price
    );

    res.status(200).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRestaurantsHanlder = async (req, res) => {
  try {
    const restaurants = await getRestaurant();
    const name = req.query.hasOwnProperty("name") ? req.query.name.toLowerCase() : null;
    if (name){
      let filtereRestaurantByName = restaurants.filter((e) => 
          e.name.toLowerCase().includes(name)
      );
      filtereRestaurantByName.length > 0 
          ? res.status(200).send(filtereRestaurantByName)
          : res.status(404).send("The activity do not exists");
  } else {
      res.status(200).send(restaurants)
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRestaurantByIdHanlder = async (req, res) => {
  try {
    const {id} = req.params
    const restaurant = await getRestaurantById(id);
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const filterRestaurantHanlder = async (req, res) => {
  try {
    const {restaurant, filter} = req.body
    const filteredRestaurant = await filterRestaurant(restaurant.restaurant, filter);
    res.status(200).json(filteredRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { 
  postRestaurantHandler, 
  getRestaurantsHanlder, 
  getRestaurantByIdHanlder, 
  filterRestaurantHanlder 
};
