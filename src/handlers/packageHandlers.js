const { postPackage } = require("../controllers/users/package/postPackage")
const { getPackages } = require("../controllers/users/package/getPackages");
const { filterPackages } = require("../controllers/users/package/getPakagesFiltered");
const { getPackageById } = require("../controllers/users/package/getPackageById");
const cloudinary = require("../utils/cloudinary");

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
            dateInit,
            dateEnd,
            hotelId,
            userId,
            restaurantId,
            activitiesId,
        } = req.body;
        
        const newPackage = await postPackage(
            name,
            location,
            price,
            duration,
            img,
            description,
            quotas,
            dateInit,
            dateEnd,
            hotelId,
            userId,
            restaurantId,
            activitiesId,);
            for(let i=0; i < img.length; i++) {
            const uploadRes = cloudinary.uploader.upload(img[i], {
            upload_preset: "patagonia",
            folder: "patagonia/paquete"
          })
          .then((data) => {
            console.log(data);
            console.log(data.secure_url);
          }).catch((err) => {
            console.log(err);
          })
          }
        res.status(200).json(newPackage)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPackageHandler = async (req, res) => {
    try {
        const packages = await getPackages();
        const name = req.query.hasOwnProperty("name")
            ? req.query.name.toLowerCase()
            : null;
        if (name) {
            let filteredPackageByName = packages.filter((e) =>
                e.name.toLowerCase().includes(name)
            );
            filteredPackageByName.length > 0
                ? res.status(200).send(filteredPackageByName)
                : res.status(404).send("The package do not exists");
        } else {
            res.status(200).send(packages)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPackageFiltered = async (req, res) => {
    try {
        let packages = req.body[1];
        let params = req.body[0];

        packages = filterPackages(packages, params);

        res.status(200).send(packages)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getPackageByIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        const package = await getPackageById(id)
        res.status(200).json(package)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { postPackageHandler, getPackageHandler, getPackageFiltered, getPackageByIdHandler };