const { Package } = require("../../../db");

const getPackages = async () => {
    const packages = await Package.findAll()
    const packArray = packages.map(e => e.dataValues)
    console.log(packArray);
    return packArray
}

module.exports = { getPackages };