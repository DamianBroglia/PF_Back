const { Package, Activity, Restaurant, Hotel, Comment } = require("../../../db");
const { promRating } = require("../promRating")

const getPackageById = async (id) => {
    const package = await Package.findByPk(id, {
        include: [
            { model: Restaurant },
            { model: Activity },
            { model: Hotel },
            { model: Comment}
        ]
    });

    package.dataValues.rating = promRating(package.comments)

    return package
};

module.exports = { getPackageById };