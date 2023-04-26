const {postPackage} = require("../controllers/users/package/postPackage")

const postPackageHandler = async (req, res) =>{
    try{
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
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {postPackageHandler};