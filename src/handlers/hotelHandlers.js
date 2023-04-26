const {
    getAllHotel,
    createHotel,
  } = require("../controllers/users/hotel/hotel");

const getAllHotelHandler = async (req, res) => {
    try {
      const AllHotel = await getAllHotel();
      res.status(200).json(AllHotel);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const createHotelHandler = async (req, res) => {
    try {
      const { name, location, image, description, stars } = req.body;
      const newHotel = await createHotel(name, location, image, description, stars);
      res.status(200).json(newHotel);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllHotelHandler,
    createHotelHandler,
  };