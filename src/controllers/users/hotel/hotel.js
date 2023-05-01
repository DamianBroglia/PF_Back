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

const filterHotels = async (starsMin, starsMax, descenStarsOrder, priceMin, priceMax, descenPriceOrder) => {
    const dataBaseHotels = await Hotel.findAll()
    let hotels = dataBaseHotels.map(e => e.dataValues)
    let filterTrue = false;
    if(!starsMin && !starsMax && !priceMin && !priceMax){
        throw new Error ("Debes pasar parametros para poder filtrar")
    }else{
        if (starsMin, starsMax) {
            if(starsMin > starsMax) throw new Error("Las estrellas minimas no pueden ser mayor que las estellas maximas")
            hotels = hotels.filter(e => e.stars >= starsMin && e.stars <= starsMax).sort((a, b) => a.stars - b.stars)
            filterTrue = true
            if (descenStarsOrder) hotels.reverse()
        }
        if (priceMin, priceMax) {
            if(priceMin > priceMax) throw new Error("El precio minimo no puede ser superior al precio maximo")
            hotels = hotels.filter(e => e.priceDay >= priceMin && e.priceDay <= priceMax).sort((a, b) => a.priceDay - b.priceDay)
            filterTrue = true
            if (descenPriceOrder) hotels.reverse()
        }
        if (filterTrue) {
            return hotels
        } else {
            throw new Error("Faltan parametros para poder filtrar")
        }
    }
}



module.exports = { createHotel, getAllHotel, getHotelById, filterHotels }