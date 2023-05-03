const { Package, Activity, Restaurant, Hotel } = require("../../../db");

const getPackages = async () => {
    const packages = await Package.findAll({
        include: [
            {model: Restaurant},
            {model: Activity},
            {model: Hotel}
        ]
    },)
    const packArray = packages.map(e => e.dataValues)
    return packArray
}

module.exports = { getPackages };