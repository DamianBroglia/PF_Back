const { Package } = require("../../../db");

const postPackage = async (
  name,
  location,
  price,
  duration,
  img,
  description,
  quotas,
  date,
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
    const newPackageDb = await Package.create({
      name,
      location,
      price,
      duration,
      img,
      description,
      quotas,
      date,
      hotelId,
      userId
    });
    await newPackageDb.addActivity(activitiesId)
    await newPackageDb.addRestaurant(restaurantId)
    return newPackageDb;
  }
};

module.exports = { postPackage };