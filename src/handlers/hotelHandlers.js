const {
  getAllHotel,
  createHotel,
  getHotelById,
  filterHotels,
} = require("../controllers/users/hotel/hotel");

const getAllHotelHandler = async (req, res) => {
  try {
    const AllHotel = await getAllHotel();
    const name = req.query.hasOwnProperty("name")
      ? req.query.name.toLowerCase()
      : null;
    if (name) {
      let filteredHotelByName = AllHotel.filter((e) =>
        e.name.toLowerCase().includes(name)
      );
      filteredHotelByName.length > 0
        ? res.status(200).send(filteredHotelByName)
        : res.status(404).send("The hotel do not exists");
    } else {
      res.status(200).send(AllHotel);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createHotelHandler = async (req, res) => {
  try {
    const { name, location, img, description, stars, priceDay } = req.body;
    const newHotel = await createHotel(
      name,
      location,
      img,
      description,
      stars,
      priceDay
    );
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
    const { starsMin, starsMax, priceMin, priceMax } = req.body;
    const filHotels = await filterHotels(
      starsMin,
      starsMax,
      priceMin,
      priceMax
    );
    res.status(200).json(filHotels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllHotelHandler,
  createHotelHandler,
  getHotelByIdHandler,
  filterHotelHandler,
};
