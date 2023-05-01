const { Package } = require("../../../db");

const getPackageById = async (id) => {
    const package = await Package.findByPk(id);
    return package
};

module.exports = { getPackageById };