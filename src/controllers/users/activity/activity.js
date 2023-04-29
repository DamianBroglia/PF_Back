const { Activity } = require("../../../db")

const createActivity = async (name, duration, img, description, typeAct, price) => {
    let activityCreate = await Activity.create({ name, duration, img, description, typeAct, price})
    return activityCreate
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll()

    return [...DataBaseActivity]
}

const getActivityById = async (id) => {
    const activity = await Activity.findByPk(id)
    return activity
}

const filterActivity = async (type, priceMin, priceMax, durationMin, durationMax) => {
    const dataBaseActivities = await Activity.findAll()
    let activities = dataBaseActivities.map(e => e.dataValues)
    let filterTrue = false;
    if(!type, !priceMin, !priceMax, !durationMin, !durationMax){
        throw new Error ("Debes pasar parametros para filtrar")
    }else{
        if (type) {
            activities = activities.filter(e => e.type === type)
            filterTrue = true;
        }
        if (priceMin, priceMax) {
            activities = activities.filter(e => e.price >= priceMin && e.price <= priceMax)
            filterTrue = true;
        }
        if (durationMin, durationMax) {
            activities = filteredByPrice.filter(e = e.duration >= durationMin && e.duration <= durationMax)
            filterTrue = true;
        }
        if(filterTrue){
            return activities;
        }else{
            throw new Error ("Faltan parametros para poder filtrar")
        }
    }
}

module.exports = { createActivity, getAllActivity, getActivityById, filterActivity }