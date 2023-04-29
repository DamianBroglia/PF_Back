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
    let filterTrue = false;
    if (!starsMin, !starsMax, !priceMin, !priceMax) {
        throw new Error("Debes pasar parametros para filtrar")
    } else {
        if (starsMin, starsMax) {
            hotels = hotels.filter(e => e.stars >= starsMin && e.stars <= starsMax)
            filterTrue = true
        }
        if (priceMin, priceMax) {
            hotels = hotels.filter(e => e.priceDay >= priceMin && e.priceDay <= priceMax)
            filterTrue = true
        }
        if (filterTrue) {
            return hotels
        } else {
            throw new Error("Faltan parametros para poder filtrar")
        }

    }
}



module.exports = { createHotel, getAllHotel, getHotelById, filterHotels }