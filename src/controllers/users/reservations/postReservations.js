const { Reservation, Package } = require("../../../db");

const postReservation = async (
    paid,
    numOfTravels,
    userId,
    packageId
) => {
    const packageSould = await Package.findByPk(packageId)
    const totalPrice = packageSould.price * numOfTravels
    const newReservation = await Reservation.create({
        dateOfPurchase:new Date(),
        paid,
        numOfTravels,
        totalPrice,
        userId,
        packageId
    });
    return (newReservation)

};

module.exports = { postReservation };