const { Package, Activity, Restaurant } = require("../../../db");

const getPackages = async () => {
    const packages = await Package.findAll({
        include: Activity && Restaurant
    })
    const packArray = packages.map(e => e.dataValues)
    return packArray
}

module.exports = { getPackages };