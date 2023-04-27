const {
  getRestaurant,
} = require("../controllers/users/restaurant/getRestaurants");
const {
  postRestaurant,
} = require("../controllers/users/restaurant/postRestaurant");

const postRestaurantHandler = async (req, res) => {
  try {
    const { name, location, img, description } = req.body;
    const newRestaurant = await postRestaurant(
      name,
      location,
      img,
      description
    );
    res.status(200).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log({ error: error.message });
  }
};

const getRestaurantsHanlder = async (req, res) => {
  try {
    const restaurants = await getRestaurant();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postRestaurantHandler, getRestaurantsHanlder };
