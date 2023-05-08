const { Restaurant, Comment } = require("../../../db");
const { promRating } = require("../promRating")

const getRestaurant = async () => {
    const restaurants = await Restaurant.findAll({
        include: Comment
    });

    restaurants.forEach((el) => {
        el.dataValues.rating = promRating(el.comments)
        delete el.dataValues.comments
    });

    return restaurants
}

module.exports = { getRestaurant }