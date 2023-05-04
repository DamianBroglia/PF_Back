const { Package, Activity, Restaurant, Hotel, Comment } = require("../../../db");
const { promRating } = require("../promRating")

const getPackages = async () => {
    const packages = await Package.findAll({
        include: [
            { model: Restaurant },
            { model: Activity },
            { model: Hotel },
            { model: Comment }
        ]
    },)

    packages.forEach((el) => {
        el.dataValues.rating = promRating(el.comments)
        delete el.dataValues.comments
    });

   
    return packages
}

module.exports = { getPackages };