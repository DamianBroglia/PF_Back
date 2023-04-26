const { getAllActivity, createActivity} = require("../controllers/users/activity/activity")

const getAllActivityHandler = async (req, res) => {
    try {
        const AllActivity = await getAllActivity()
        res.status(200).json(AllActivity)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const createActivityHandler = async (req, res) => {
    try {
        const { name, duration, img, description } = req.body
        const newActivity = await createActivity(name, duration, img, description)
        res.status(200).json(newActivity)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message})
    }
}

module.exports = {
    getAllActivityHandler, createActivityHandler
}