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
  hotel,
  restaurant,
  activities
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
      hotel,
      restaurant,
      activities,
    });
    return newPackageDb;
  }
};

module.exports = { postPackage };