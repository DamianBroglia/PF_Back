const { Activity, Comment } = require("../../../db")
const { promRating } = require("../promRating")

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

    DataBaseActivity.forEach((el) => {
        el.dataValues.rating = promRating(el.comments)
        delete el.dataValues.comments
    });

    return [...DataBaseActivity]
}

const getActivityById = async (id) => {
    const activity = await Activity.findByPk(id, {
        include: Comment
    })

    activity.dataValues.rating = promRating(activity.comments)

    return activity
}

const filterActivity = async (activities, filter) => {

    if(filter.priceMin > filter.priceMax || filter.durationMin > filter.durationMax ) throw new Error ("El minimo no puede superar al maximo")

    if (filter.type) activities = activities.filter(e => e.typeAct === filter.type)

    if (filter.priceMin) activities = activities.filter(e => e.price >= filter.priceMin).sort((a, b) => a.price - b.price)

    if (filter.priceMax) activities = activities.filter(e => e.price <= filter.priceMax).sort((a, b) => b.price - a.price)

    if (filter.durationMin) activities = activities.filter(e => e.duration >= filter.durationMin).sort((a, b) => a.duration - b.duration)

    if (filter.durationMax) activities = activities.filter(e => e.duration <= filter.durationMax).sort((a, b) => b.duration - a.duration)

    if (filter.order) {
        if(filter.order === "priceMax") activities.sort((a, b) => b.price - a.price)
        if(filter.order === "priceMin") activities.sort((a, b) => a.price - b.price)
        if(filter.order === "durationMax") activities.sort((a, b) => b.duration - a.duration)
        if(filter.order === "durationMin") activities.sort((a, b) => a.duration - b.duration)
        if(filter.order === "bestRating") activities.sort((a,b) => b.rating - a.rating)
    }

    return activities
}


module.exports = { createActivity, getAllActivity, getActivityById, filterActivity }