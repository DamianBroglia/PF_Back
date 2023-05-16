const { Reservation, Package } = require("../../../db");
// const { repostPackage } = require("../package/postPackage");


const postReservation = async (
    paid,
    numOfTravels,
    userId,
    packageId
) => {
    const packageSold = await Package.findByPk(packageId);
    if(packageSold.quotas > 0) {
        packageSold.decrement('quotas');
        await packageSold.save();
        
        // if(packageSold.quotas === 0){
        //     await repostPackage(packageId);
        // }
    } else {
        throw new Error("No hay mas cupos disponibles para este paquete")
    }
    
    const totalPrice = packageSold.price * numOfTravels
    const newReservation = await Reservation.create({
        dateOfPurchase:new Date(),
        paid,
        numOfTravels,
        totalPrice,
        userId,
        packageId,
    });
    
    return (newReservation)

};

module.exports = { postReservation };