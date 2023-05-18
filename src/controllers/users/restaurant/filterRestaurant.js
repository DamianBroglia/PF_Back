

const filterRestaurant = async (restaurant, filter) => {

    let msg = "No hay resultados que cumplan con estos parametros: "

    if (filter.priceMin) {
        restaurant = restaurant.filter(e => e.price >= filter.priceMin).sort((a, b) => a.price - b.price)
        msg = msg + `Precio Minimo: ${filter.priceMin}. `
    }
    

    if (filter.priceMax) {
        restaurant = restaurant.filter(e => e.price <= filter.priceMax).sort((a, b) => b.price - a.price)
        msg = msg + `Precio Maximo: ${filter.priceMax}. `
    }
    

    if (filter.order) {
        if (filter.order === "priceMax") restaurant.sort((a, b) => b.price - a.price)
        if (filter.order ==="priceMin") restaurant.sort((a, b) => a.price - b.price)
        if (filter.order === "bestRating") restaurant.sort((a, b) => b.rating - a.rating)
    }

    if(restaurant.length) return restaurant

    throw new Error (msg)
}

module.exports = { filterRestaurant }