
const { Restaurant, Comment } = require("../../../db");

const getRestaurantById = async (id) => {
    const restaurant = await Restaurant.findByPk(id, {
        include: Comment
    });
    return restaurant

}

module.exports = { getRestaurantById }