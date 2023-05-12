const { Reservation } = require("../../../db");


const getReservationByUserId = async (userId) => {
    const userReservationDB = await Reservation.findAll({
        where: {userId}
    })
    const userReservation = userReservationDB.map(e => e.dataValues)
    return userReservation
}
module.exports = { getReservationByUserId };