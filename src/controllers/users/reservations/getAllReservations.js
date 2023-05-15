const { Reservation, User, Package  } = require("../../../db");


const getAllReservation = async () => {
    const allReservationDB = await Reservation.findAll({
        include: [
            { model: User },
            { model: Package },
        ]
    })
    const allReservation = allReservationDB.map(e => e.dataValues)
    return allReservation
}
module.exports = { getAllReservation };