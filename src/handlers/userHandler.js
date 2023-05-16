
const {postUser} = require("../controllers/users/users/postUser")
const { getUserById } = require("../controllers/users/users/getUserById")
const { getUserNotification } = require("../controllers/users/users/getUserNotification")

const postUserHandler = async(req, res) =>{
    try {
        const { name, email, validator, lastName, picture, notification, isAdmin } = req.body
        const newUser = await postUser(name, email, validator, lastName, picture, notification, isAdmin);
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error: error.massage})
    }
}

const getUserByIdHandler = async(req, res) => {
    try{
        const { id } = req.params
        const userById = await getUserById(id);
        res.status(200).json(userById)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const getUserNotificationHandler = async(req, res) => {
    try{
        const usersNotification = await getUserNotification();
        res.status(200).json(usersNotification)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}




module.exports = {postUserHandler, getUserByIdHandler, getUserNotificationHandler}
