const { Restaurant } = require("../../../db");

const getRestaurantById = async (id) => {
    const restaurant = await Restaurant.findByPk(id);
    return restaurant

}

module.exports = { getRestaurantById }