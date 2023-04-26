const { postPackage } = require("../controllers/users/package/postPackage")
const { getPackages } = require("../controllers/users/package/getPackages")


const postPackageHandler = async (req, res) => {
    try {
        const {
            name,
            location,
            price,
            duration,
            img,
            description,
            quotas,
            date,
            hotel,
            restaurant,
            activities,
        } = req.body;
        const newPackage = await postPackage(name,
            location,
            price,
            duration,
            img,
            description,
            quotas,
            date,
            hotel,
            restaurant,
            activities,);
        res.status(200).json(newPackage)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPackageHandler = async (req, res) => {
    try {
        const packages = await getPackages();
        console.log(packages);
        res.status(200).json(packages)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postPackageHandler, getPackageHandler };