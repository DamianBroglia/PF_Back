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
        const reser = {
            username: e.user.userName,
            email: e.user.email,
            packName: e.package.name,
            paid: e.paid,
            dateInit: e.package.dateInit,
            totalPrice: e.totalPrice
        }
        response.push(reser)
    })
    return response
};

module.exports = { getReservationForThisWeek };