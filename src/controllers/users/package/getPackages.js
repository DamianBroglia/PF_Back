const { Package } = require("../../../db");

const getPackages = async () => {
    const packages = await Package.findAll()
    const packArray = packages.map(e => e.dataValues)
    return packArray
}

module.exports = { getPackages };