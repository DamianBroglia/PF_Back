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

const postRestaurantHandler = async (req, res) => {
  try {
    const { name, location, img, description, price } = req.body;
    const newRestaurant = await postRestaurant(
      name,
      location,
      img,
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
      let filteredRestaurantByName = restaurants.filter((e) => 
          e.name.toLowerCase().includes(name)
      );
      filteredRestaurantByName.length > 0 
          ? res.status(200).send(filteredRestaurantByName)
          : res.status(404).send("The Restaurant do not exists");
  } else {
      res.status(200).send(restaurants)
  }
    res.status(200).json(restaurants);
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
    const {priceMin, priceMax} = req.body
    const restaurant = await filterRestaurant(priceMin, priceMax);
    res.status(200).json(restaurant);
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
