const { Restaurant, Comment } = require("../../../db");
const { promRating } = require("../promRating")

const filterRestaurant = async (priceMin, priceMax) => {
    const restaurant = await Restaurant.findAll({ include: Comment })

    if (priceMin) {
        restaurant = restaurant.filter(e => e.price >= priceMin).sort((a, b) => a.price - b.price)
    }
    if (priceMax) {
        restaurant = restaurant.filter(e => e.price >= priceMax).sort((a, b) => a.price - b.price)
        restaurant.reverse()
    }

    restaurant.forEach((el) => {
        el.dataValues.rating = promRating(el.comments)
        delete el.dataValues.comments
    });

    return restaurant
}

module.exports = { filterRestaurant }