const { Reservation } = require("../../../db");


const getAllReservation = async () => {
    const allReservationDV = await Reservation.create.findAll()
    const allReservation = allReservationDV.map(e => e.dataValues)
    return allReservation
}
module.exports = { getAllReservation };