const { Activity } = require("../../../db")

const createActivity = async (name, duration, img, description) => {
    let activityCreate = await Activity.create({name, duration, img, description})
    return activityCreate
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll()

    return [...DataBaseActivity]
}

module.exports = { createActivity, getAllActivity }