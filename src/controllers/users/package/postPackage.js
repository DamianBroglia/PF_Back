const { Package } = require("../../../db");

const postPackage = async (
  name,
  location,
  price,
  duration,
  img,
  description,
  quotas,
  dateInit,
  dateEnd,
  hotelId,
  userId,
  restaurantId,
  activitiesId,
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
      duration,
      img,
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

