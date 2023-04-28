const { Activity } = require("../../../db")

const createActivity = async (name, duration, img, description, price, type) => {
    let activityCreate = await Activity.create({name, duration, img, description, price, type})
    return activityCreate
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll()

    return [...DataBaseActivity]
}

module.exports = { createActivity, getAllActivity }