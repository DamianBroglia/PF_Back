const { Package, Activity, Restaurant, Hotel, Comment } = require("../../../db");

const getPackages = async () => {
    const packages = await Package.findAll({
        include: [
            { model: Restaurant },
            { model: Activity },
            { model: Hotel },
            { model: Comment }
        ]
    },)
    const packArray = packages.map(e => e.dataValues)
    return packArray
}

module.exports = { getPackages };