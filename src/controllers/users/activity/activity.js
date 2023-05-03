const { Activity, Comment } = require("../../../db")

const createActivity = async (name, duration, img, description, typeAct, price) => {
    const activityDataBase = await Activity.findAll()
    const exists = activityDataBase.find(e => e.name === name)
    if (exists) {
        throw new Error(`Ya existe una actividad con este nombre:${name}`)
    } else {
        if (name && duration && img && description && typeAct && price) {
            let activityCreate = await Activity.create({ name, duration, img, description, typeAct, price })
            return activityCreate
        } else {
            throw new Error("Faltan parametros para postear una actividad")
        }
    }
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll({
        include: Comment
    })

    return [...DataBaseActivity]
}

const getActivityById = async (id) => {
    const activity = await Activity.findByPk(id, {
        include: Comment
    })
    return activity
}

const filterActivity = async (type, priceMin, priceMax, durationMin, durationMax) => {
    const dataBaseActivities = await Activity.findAll({ include: Comment })
    let activities = dataBaseActivities.map(e => e.dataValues)

    if (type) {
        activities = activities.filter(e => e.typeAct === type)
    }
    if (priceMin) {
        activities = activities.filter(e => e.price >= priceMin).sort((a, b) => a.price - b.price)
    }
    if (priceMax) {
        activities = activities.filter(e => e.price <= priceMax).sort((a, b) => a.price - b.price)
        activities.reverse()
    }
    if (durationMin) {
        activities = filteredByPrice.filter(e = e.duration >= durationMin).sort((a, b) => a.duration - b.duration)
    }
    if (durationMax) {
        activities = filteredByPrice.filter(e = e.duration >= durationMax).sort((a, b) => a.duration - b.duration)
        activities.reverse()
    }
    return activities
}


module.exports = { createActivity, getAllActivity, getActivityById, filterActivity }