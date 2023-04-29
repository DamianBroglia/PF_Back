const { Restaurant } = require("../../../db");

const filterRestaurant = async (priceMin, priceMax) => {
    const dataBaseRestorant = await Restaurant.findAll()
    let restaurant = dataBaseRestorant.map(e => e.dataValues)
    if (!priceMin, !priceMax) {
        throw new Error("Debes pasar parametros para filtrar")
    } else {
        if (priceMin, priceMax) {
            restaurant = restaurant.filter(e => e.price >= priceMin && e.price <= priceMax)
            return restaurant;
        } else {
            throw new Error("Faltan parametros para poder filtrar")
        }

    }
}

module.exports = { filterRestaurant }