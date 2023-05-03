const { Restaurant, Comment } = require("../../../db");
const { promRating } = require("../promRating")

const getRestaurantById = async (id) => {
    const restaurant = await Restaurant.findByPk(id, {
        include: Comment
    });
 
    restaurant.dataValues.rating = promRating(restaurant.comments)
       
    return restaurant

}

module.exports = { getRestaurantById }