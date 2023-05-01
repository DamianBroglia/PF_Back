const { Package } = require("../../../db");
 const { autoPrice } = require("./autoPricePackage")

const postPackage = async (
  name,
  location,
  duration,
  img,
  description,
  quotas,
  dateInit,
  dateEnd,
  hotelId,
  restaurantId,
  activitiesId,
  userId
) => {
  const findPackage = await Package.findAll();
  const packageExists = findPackage.find((e) => e.name === name);
  if (packageExists) {
    return;
  } else {
    const price = await autoPrice(duration, hotelId, restaurantId, activitiesId )
    const newPackageDb = await Package.create({
      name,
      location,
      img,
      duration,
      description,
      quotas,
      dateInit,
      dateEnd,
      hotelId,
      userId,
      price
    });
    await newPackageDb.addActivity(activitiesId)
    await newPackageDb.addRestaurant(restaurantId)
    return newPackageDb;
  }
};

module.exports = { postPackage };