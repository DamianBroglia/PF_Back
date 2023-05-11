const {
  getAllHotel,
  createHotel,
  getHotelById,
  filterHotels
} = require("../controllers/users/hotel/hotel");
const cloudinary = require("../utils/cloudinary");

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
    const { name, location, img, description, stars, priceDay } = req.body;
    for(let i=0; i < img.length; i++) {
      const uploadRes = cloudinary.uploader.upload(img[i], {
      upload_preset: "patagonia",
      folder: "patagonia/hotel"
    })
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
    }).catch((err) => {
      console.log(err);
    })
    }
    const newHotel = await createHotel(name, location, img, description, stars, priceDay);
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
    const {hoteles, filter} = req.body;
    const filteredhoteles = await filterHotels(hoteles.hoteles, filter);
    res.status(200).json(filteredhoteles);
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