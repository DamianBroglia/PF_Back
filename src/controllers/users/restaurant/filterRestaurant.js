

const filterRestaurant = async (restaurant, filter) => {

    if (filter.priceMin > filter.priceMax) throw new Error("El minimo no puede superar al maximo")

    if (filter.priceMin) restaurant = restaurant.filter(e => e.price >= filter.priceMin).sort((a, b) => a.price - b.price)

    if (filter.priceMax) restaurant = restaurant.filter(e => e.price <= filter.priceMax).sort((a, b) => b.price - a.price)

    if (filter.order) {
        if (filter.order === "priceMax") restaurant.sort((a, b) => b.price - a.price)
        if (filter.order ==="priceMin") restaurant.sort((a, b) => a.price - b.price)
        if (filter.order === "bestRating") restaurant.sort((a, b) => b.rating - a.rating)
    }

    return restaurant
}

module.exports = { filterRestaurant }