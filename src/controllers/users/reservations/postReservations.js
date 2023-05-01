const { Reservation, Package } = require("../../../db");

const postReservation = async (
    dateOfPurchase,
    paid,
    numOfTravels,
    userId,
    packageId
) => {
    const packageSould = await Package.findByPk(packageId)
    const totalPrice = packageSould.price * numOfTravels
    const newReservation = await Reservation.create({
        dateOfPurchase,
        paid,
        numOfTravels,
        totalPrice,
        userId,
        packageId
    });
    return (newReservation)

};

module.exports = { postReservation };