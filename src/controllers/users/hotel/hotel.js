const { Hotel } = require("../../../db")

const createHotel = async (name, location, image, description, stars, priceDay) => {
    const hotelsDataBase = await Hotel.findAll()
    const exists = hotelsDataBase.find(e => e.name === name)
    if (exists) {
        throw new Error(`Ya existe un hotel con este nombre: ${name}`)
    } else {
        if (name && location && image && description && stars && priceDay) {
            let hotelCreate = await Hotel.create({ name, location, image, description, stars, priceDay })
            return hotelCreate;
        } else {
            throw new Error("Faltan parametros para postear un hotel")
        }
    }
}

const getAllHotel = async () => {
    const DataBaseHotel = await Hotel.findAll();

    return [...DataBaseHotel]
}

const getHotelById = async (id) => {
    const hotel = await Hotel.findByPk(id);
    return hotel;
}

const filterHotels = async (starsMin, starsMax, priceMin, priceMax) => {
    const dataBaseHotels = await Hotel.findAll()
    let hotels = dataBaseHotels.map(e => e.dataValues)
    if (starsMin) {
        hotels = hotels.filter(e => e.stars >= starsMin).sort((a, b) => a.stars - b.stars)
    }
    if (starsMax) {
        hotels = hotels.filter(e => e.stars <= starsMax).sort((a, b) => a.stars - b.stars)
        hotels.reverse()
    }
    if (priceMin) {
        hotels = hotels.filter(e => e.priceDay >= priceMin).sort((a, b) => a.priceDay - b.priceDay)   
    }
    if (priceMax) {
        hotels = hotels.filter(e => e.priceDay <= priceMax).sort((a, b) => a.priceDay - b.priceDay)
        hotels.reverse()
    }
    return hotels
}



module.exports = { createHotel, getAllHotel, getHotelById, filterHotels }