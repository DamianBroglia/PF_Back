const { Activity } = require("../../../db")

const createActivity = async (name, duration, img, description, typeAct, price) => {
    const activityDataBase = await Activity.findAll()
    const exists = activityDataBase.find(e => e.name === name)
    if(exists){
        throw new Error (`Ya existe una actividad con este nombre:${name}`)
    }else{
        if(name && duration && img && description && typeAct && price){
            let activityCreate = await Activity.create({ name, duration, img, description, typeAct, price})
            return activityCreate
        }else{
            throw new Error ("Faltan parametros para postear una actividad")
        }
    }
}

const getAllActivity = async () => {
    const DataBaseActivity = await Activity.findAll()

    return [...DataBaseActivity]
}

const getActivityById = async (id) => {
    const activity = await Activity.findByPk(id)
    return activity
}

const filterActivity = async (type, priceMin, priceMax, descenPriceOrder, durationMin, durationMax, descenDurationOrder) => {
    const dataBaseActivities = await Activity.findAll()
    let activities = dataBaseActivities.map(e => e.dataValues)
    let filterTrue = false;
    if(!type && !priceMin && !priceMax && !durationMin && !durationMax){
        throw new Error ("Debes pasar parametros para filtrar")
    }else{
        if (type) {
            activities = activities.filter(e => e.typeAct === type)
            filterTrue = true;
        }
        if (priceMin, priceMax) {
            if(priceMin > priceMax) throw new Error("El precio minimo no puede ser mayor que el precio maximo")
            activities = activities.filter(e => e.price >= priceMin && e.price <= priceMax).sort((a, b) => a.price - b.price)
            filterTrue = true;
            if(descenPriceOrder) activities.reverse()
        }
        if (durationMin, durationMax) {
            if(durationMin > durationMax) throw new Error("El precio minimo no puede ser mayor al precio maximo")
            activities = filteredByPrice.filter(e = e.duration >= durationMin && e.duration <= durationMax)
            filterTrue = true;
            if(descenDurationOrder) activities.reverse()
        }
        if(filterTrue){
            return activities;
        }else{
            throw new Error ("Faltan parametros para poder filtrar")
        }
    }
}

module.exports = { createActivity, getAllActivity, getActivityById, filterActivity }