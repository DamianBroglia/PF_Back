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
  if (packageExists && packageExists.name !== "custom package") {
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
      hotelId,
      userId,
    });
    await newPackageDb.addActivity(activitiesId)
    await newPackageDb.addRestaurant(restaurantId)
    return newPackageDb;
  }
};

// const repostPackage = async (packageId) => {
//   // Obtén el paquete original
//   const originalPackage = await Package.findByPk(packageId);

//   // Crea una copia del paquete original con la fecha adelantada un mes
//   const repostedPackage = await Package.create({
//     name: originalPackage.name,
//     location: originalPackage.location,
//     price: originalPackage.price,
//     duration: originalPackage.duration,
//     img: originalPackage.img,
//     description: originalPackage.description,
//     quotas: 10,
//     dateInit: new Date(originalPackage.dateInit.getFullYear(), originalPackage.dateInit.getMonth() + 1, originalPackage.dateInit.getDate()),
//     dateEnd: new Date(originalPackage.dateEnd.getFullYear(), originalPackage.dateEnd.getMonth() + 1, originalPackage.dateEnd.getDate()),
//     hotelId: originalPackage.hotelId,
//     userId: originalPackage.userId,
    
//   });


//   //Me traigo las actividades y restaurants asociados al paquete original
//   const activities = await originalPackage.getActivities();
//   const restaurants = await originalPackage.getRestaurants();

//   //Y se las paso al paquete reposteado
//   await repostedPackage.addActivity(activities);
//   await repostedPackage.addRestaurant(restaurants);

//   return repostedPackage;
// };





module.exports = { postPackage };

