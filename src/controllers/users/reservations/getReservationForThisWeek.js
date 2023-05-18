const { Reservation, User, Package } = require("../../../db");
const { addDays } = require ('date-fns');

const getReservationForThisWeek = async () => {
    const reservationDB = await Reservation.findAll({
        include: [
            { model: User },
            { model: Package },
        ]
    })
    let response = [];
    const reservationThisweek = reservationDB.filter(e => e.package.dateInit <= addDays(new Date(), 3))
    reservationThisweek.forEach((e) => {
        response.push(e.user.email)
    })
    return response
};

module.exports = { getReservationForThisWeek };
