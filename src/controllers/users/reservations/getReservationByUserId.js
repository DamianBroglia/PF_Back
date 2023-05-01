const { Reservation } = require("../../../db");


const getReservationByUserId = async (userId) => {
    const userReservationDV = await Reservation.create.findAll({
        where: {userId}
    })
    const userReservation = userReservationDV.map(e => e.dataValues)
    return userReservation
}
module.exports = { getReservationByUserId };