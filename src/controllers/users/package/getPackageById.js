const { Package } = require("../../../db");

const getPackageById = async (id) => {
    const package = await Package.findByPk(id, {
        include: [
            { model: Restaurant },
            { model: Activity },
            { model: Hotel }
        ]
    });
    return package
};

module.exports = { getPackageById };