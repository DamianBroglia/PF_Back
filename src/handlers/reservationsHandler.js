const {
    getAllReservation
} = require("../controllers/users/reservations/getAllReservations");
const {
    getReservationByUserId
} = require("../controllers/users/reservations/getReservationByUserId");
const {
    postReservation
} = require("../controllers/users/reservations/postReservations");

const getAllReservationHandler = async (req, res) => {
    try {
        const AllReservation = await getAllReservation();
        res.status(200).json(AllReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReservationByUserIdHandler = async (req, res) => {
    try {
        const { userId } = req.params
        const userReservation = await getReservationByUserId(userId);
        res.status(200).json(userReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const postReservationHandler = async (req, res) => {
    try {
        const { dateOfPurchase, paid, numOfTravels, userId, packageId } = req.params
        const newReservation = await postReservation(dateOfPurchase, paid, numOfTravels, userId, packageId);
        res.status(200).json(newReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { 
    postReservationHandler,
    getReservationByUserIdHandler,
    getAllReservationHandler
  };