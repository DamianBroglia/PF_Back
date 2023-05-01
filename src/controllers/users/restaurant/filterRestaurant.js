const { Restaurant } = require("../../../db");

const filterRestaurant = async (priceMin, priceMax, descenPriceOrder) => {
    const dataBaseRestorant = await Restaurant.findAll()
    let restaurant = dataBaseRestorant.map(e => e.dataValues)
    if (!priceMin && !priceMax) {
        throw new Error("Debes pasar parametros para filtrar")
    } else {
        if (priceMin, priceMax) {
            if (priceMin > priceMax) throw new Error("El precio minimo no puede ser superior al precio maximo")
            restaurant = restaurant.filter(e => e.price >= priceMin && e.price <= priceMax).sort((a, b) => a.price - b.price)
            if (descenPriceOrder) return restaurant.reverse()
            return restaurant;
        } else {
            throw new Error("Faltan parametros para poder filtrar")
        }

    }
}

module.exports = { filterRestaurant }