const { Hotel, Restaurant, Activity } = require("../../../db");

const autoPrice = async (duration, hotelId, arrayResto, arrayActivity) => {
    const hotelDataBase = await Hotel.findByPk(hotelId)
    const restaurantDataBaseDV = await Restaurant.findAll()
    const restaurantDataBase = restaurantDataBaseDV.map(e => e.dataValues)
    const activityDataBaseDV = await Activity.findAll()
    const activityDataBase = activityDataBaseDV.map(e => e.dataValues)
    let restaurantPackage = []
    let totalRestaurant = 0;
    let activityPackage = []
    let totalActivity = 0;
    let totalHotel = 0;

    if (arrayResto) {
        arrayResto.forEach(el => {
            const resto = restaurantDataBase.find(e => e.id === el)
            if (resto) restaurantPackage.push(resto)
        });
        restaurantPackage.forEach(el => {
            totalRestaurant = totalRestaurant + el.price
        })
    }
    if (arrayActivity) {
        arrayActivity.forEach(el => {
            const activity = activityDataBase.find(e => e.id === el)
            if (activity) activityPackage.push(activity)
        })
        activityPackage.forEach(el => {
            totalActivity = totalActivity + el.price
        })
    }
    if (hotelId) {
       totalHotel = hotelDataBase.priceDay * duration
    }
 
    return totalRestaurant + totalActivity + totalHotel

}

module.exports = { autoPrice };