const { Reservation, User, Package } = require("../../../db");


const getReservationByUserId = async (userId) => {
    const userReservationDB = await Reservation.findAll({
        where: {userId},
        include: [
            { model: User },
            { model: Package },
        ]
    })
    const userReservation = userReservationDB.map(e => e.dataValues)
    return userReservation
}
module.exports = { getReservationByUserId };