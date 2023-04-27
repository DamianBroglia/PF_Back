const {Hotel } = require("../../../db")

const createHotel = async (name, location, image, description, stars) => {
    let hotelCreate = await Hotel.create({name, location, image, description, stars})
    return hotelCreate;
}

const getAllHotel = async () => {
    const DataBaseHotel = await Hotel.findAll();

    return [...DataBaseHotel]
}

module.exports = { createHotel,  getAllHotel }