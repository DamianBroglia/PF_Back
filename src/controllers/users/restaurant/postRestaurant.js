const { Restaurant } = require("../../../db");

const postRestaurant = async (name, location, img, description, price) => {
  const findRestaurant = await Restaurant.findAll();
  const restaurantExist = findRestaurant.find((e) => e.name === name);
  if (restaurantExist) {
    throw new Error(`Ya existe un restaurant con este nombre: ${name}`)
  } else {
    if (name && location && img && description && price) {
      const newRestaurantDb = await Restaurant.create({
        name,
        location,
        img,
        description,
        price
      });
    } else {
      throw new Error("Faltan parametros para postear un restaurant")
    }
  }
};

module.exports = { postRestaurant };
