const { Restaurant } = require("../../../db");

const getRestaurant = async () => {
    const restaurants = await Restaurant.findAll();
    return restaurants

}

module.exports = { getRestaurant }