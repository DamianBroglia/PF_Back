const { Restaurant, Comment } = require("../../../db");

const getRestaurant = async () => {
    const restaurants = await Restaurant.findAll({
        include: Comment
    });
    return restaurants

}

module.exports = { getRestaurant }