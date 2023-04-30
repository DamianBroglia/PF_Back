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
    const { starsMin, starsMax, descenStarsOrder, priceMin, priceMax, descenPriceOrder} = req.body;
    const filHotels = await filterHotels(starsMin, starsMax, descenStarsOrder, priceMin, priceMax, descenPriceOrder);
    res.status(200).json(filHotels);
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