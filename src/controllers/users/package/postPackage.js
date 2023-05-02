const { Package } = require("../../../db");
 const { autoPrice } = require("./autoPricePackage")

const postPackage = async (
  name,
  location,
  img,
  duration,
  description,
  quotas,
  dateInit,
  dateEnd,
  hotelId,
  restaurantId,
  activitiesId,
  userId,
  price
) => {
  const findPackage = await Package.findAll();
  const packageExists = findPackage.find((e) => e.name === name);
  if (packageExists) {
    return;
  } else {
    const newPackageDb = await Package.create({
      name,
      location,
      price,
      img,
      duration,
      description,
      quotas,
      dateInit,
      dateEnd,
    });
    await newPackageDb.addActivity(activitiesId)
    await newPackageDb.addRestaurant(restaurantId)
    await newPackageDb.addHotel(hotelId)
    await newPackageDb.addUser(userId)
    return newPackageDb;


  }
};

module.exports = { postPackage };