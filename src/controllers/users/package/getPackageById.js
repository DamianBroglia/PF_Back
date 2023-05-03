const { Package, Activity, Restaurant, Hotel, Comment } = require("../../../db");

const getPackageById = async (id) => {
    const package = await Package.findByPk(id, {
        include: [
            { model: Restaurant },
            { model: Activity },
            { model: Hotel },
            { model: Comment}
        ]
    });
    return package
};

module.exports = { getPackageById };