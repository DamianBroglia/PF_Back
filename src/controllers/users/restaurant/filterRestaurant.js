

const filterRestaurant = async (restaurant, filter) => {

    if (filter.priceMin > filter.priceMax) throw new Error("El minimo no puede ser mayor que el maximo")
 
    if (filter.priceMin) {
        restaurant = restaurant.filter(e => e.price >= filter.priceMin).sort((a, b) => a.price - b.price)
    }
    if (filter.priceMax) {
        restaurant = restaurant.filter(e => e.price <= filter.priceMax).sort((a, b) => a.price - b.price)
        restaurant.reverse()
    }

    return restaurant
}

module.exports = { filterRestaurant }