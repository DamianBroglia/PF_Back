const { Package, Activity, Restaurant, Hotel } = require("../../../db");

const getPackages = async (userId) => {
    const packages = await Package.findAll({
        where: {userId}
    },{
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