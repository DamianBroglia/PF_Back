const { Reservation, Package } = require("../../../db");

const postReservation = async (
    paid,
    numOfTravels,
    userId,
    packageId
) => {
    const newReservation = await Reservation.create({
        dateOfPurchase:new Date(),
        paid,
        numOfTravels,
        userId,
        packageId
    });
    return (newReservation)

};

module.exports = { postReservation };
