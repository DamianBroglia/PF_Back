const { Restaurant } = require("../../../db");

const postRestaurant = async (name, location, img, description, price) => {
  const findRestaurant = await Restaurant.findAll();
  const restaurantExist = findRestaurant.find((e) => e.name === name);
  if (restaurantExist) {
    return;
  } else {
    const newRestaurantDb = await Restaurant.create({
      name,
      location,
      img,
      description,
      price
    });
    return newRestaurantDb
  }
};

module.exports = { postRestaurant };
