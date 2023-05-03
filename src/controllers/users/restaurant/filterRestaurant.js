const { Restaurant } = require("../../../db");

const filterRestaurant = async (priceMin, priceMax) => {
    const dataBaseRestorant = await Restaurant.findAll()
    let restaurant = dataBaseRestorant.map(e => e.dataValues)

    if (priceMin) {
        restaurant = restaurant.filter(e => e.price >= priceMin).sort((a, b) => a.price - b.price)
    }
    if (priceMax) {
        restaurant = restaurant.filter(e => e.price >= priceMax).sort((a, b) => a.price - b.price)
        restaurant.reverse()
    }
    return restaurant
}

module.exports = { filterRestaurant }