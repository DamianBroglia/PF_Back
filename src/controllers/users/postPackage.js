const { Package } = require("../../db");

const postPackage = async (req, res) => {
  const {
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
  } = req.body;
  try {
    const findPackage = await Package.findAll()
    const packageExists = findPackage.find(e => e.name === name)
    if(packageExists){
        res.status(400).end("You already used that name for a package")
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
        })
        res.status(200).end(newPackageDb)
    }
  } catch (error) {
        res.status(400).end(error.message)
  }
}

module.exports = {postPackage}
