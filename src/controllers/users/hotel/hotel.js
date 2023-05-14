const { Hotel, Comment } = require("../../../db")
const { promRating } = require("../promRating")

const createHotel = async (name, location, img, description, stars, priceDay) => {
    const hotelsDataBase = await Hotel.findAll()
    const exists = hotelsDataBase.find(e => e.name === name)
    if (exists) {
        throw new Error(`Ya existe un hotel con este nombre: ${name}`)
    } else {
        if (name && location && img && description && stars && priceDay) {
            let hotelCreate = await Hotel.create({ name, location, img, description, stars, priceDay })
            return hotelCreate;
        } else {
            throw new Error("Faltan parametros para postear un hotel")
        }
    }
}

const getAllHotel = async () => {
    const DataBaseHotel = await Hotel.findAll({
        include: Comment
    });

    DataBaseHotel.forEach((el) => {
        el.dataValues.rating = promRating(el.comments)
        delete el.dataValues.comments
    });

    return DataBaseHotel
}

const getHotelById = async (id) => {
    const hotel = await Hotel.findByPk(id, {
        include: Comment
    });

    hotel.dataValues.rating = promRating(hotel.comments)

    return hotel;
}

const filterHotels = async (hoteles, filter) => {

    let msg = "No hay resultados que cumplan con estos parametros: "

    if (filter.starsMin) {
        hoteles = hoteles.filter(e => e.stars >= filter.starsMin).sort((a, b) => a.stars - b.stars)
        msg = msg + ` Minimo de Estrellas: ${filter.starsMin}. `
    }
    if (filter.starsMax) {
        hoteles = hoteles.filter(e => e.stars <= filter.starsMax).sort((a, b) => b.stars - a.stars)
        msg = msg + `Maximo de Estrellas: ${filter.starsMax}. `
    }
    if (filter.priceMin) {
        hoteles = hoteles.filter(e => e.priceDay >= filter.priceMin).sort((a, b) => a.priceDay - b.priceDay)
        msg = msg + `Precio Minimo: ${filter.priceMin}. `
    }
    if (filter.priceMax) {
        hoteles = hoteles.filter(e => e.priceDay <= filter.priceMax).sort((a, b) => b.priceDay - a.priceDay)
        msg = msg + `Precio Maximoo: ${filter.priceMax}.`
    }

    if (filter.order) {
        if (filter.order === "starsMax") hoteles.sort((a, b) => b.stars - a.stars)
        if (filter.order === "starsMin") hoteles.sort((a, b) => a.stars - b.stars)
        if (filter.order === "priceMax") hoteles.sort((a, b) => b.priceDay - a.priceDay)
        if (filter.order === "priceMin") hoteles.sort((a, b) => a.priceDay - b.priceDay)
        if (filter.order === "BestRating") hoteles.sort((a, b) => b.rating - a.rating)
    }

    if (hoteles.length > 0) return hoteles

    throw new Error(msg)

}



module.exports = { createHotel, getAllHotel, getHotelById, filterHotels }