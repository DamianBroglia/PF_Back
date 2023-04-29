const {
  getAllHotel,
  createHotel,
  getHotelById,
  filterHotels
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
    const { name, location, image, description, stars, priceDay } = req.body;
    const newHotel = await createHotel(name, location, image, description, stars, priceDay);
    res.status(200).json(newHotel);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const getHotelByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await getHotelById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const filterHotelHandler = async (req, res) => {
  try {
    const { starsMin, starsMax, priceMin, priceMax} = req.body;
    const filterHotels = await filterHotels(starsMin, starsMax, priceMin, priceMax);
    res.status(200).json(filterHotels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllHotelHandler,
  createHotelHandler,
  getHotelByIdHandler,
  filterHotelHandler
};