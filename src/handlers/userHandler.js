
const {postUser} = require("../controllers/users/users/postUser")
const { getUserById } = require("../controllers/users/users/getUserById")
const { getUserNotification } = require("../controllers/users/users/getUserNotification")
const { putUserNotificationOn } = require("../controllers/users/users/putUserNotificationOn")

const postUserHandler = async(req, res) =>{
    try {
        const { name, email, validator, lastName, picture, notification, isAdmin } = req.body
        const newUser = await postUser(name, email, validator, lastName, picture, notification, isAdmin);
        const userInfo = {
            id: newUser.id,
            isAdmin: newUser.isAdmin,
            notification: newUser.notification,
            email: newUser.email,
        }
        res.status(200).json(userInfo)
    } catch (error) {
        res.status(400).json({error: error.massage})
    }
}

const getUserByIdHandler = async(req, res) => {
    try{
        const { id } = req.params
        const userById = await getUserById(id);
        const userInfo = {
            id: userById.id || "",
            isAdmin: userById.isAdmin || "",
            notification: userById.notification || "",
            email: userById.email || "",
        }
        res.status(200).json(userInfo)
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

const putUserNotification = async (req, res) => {
    try {
        const { id, notification } = req.body;
        const usersNotification = await putUserNotificationOn(id, notification);
        res.status(200).json(usersNotification);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}




module.exports = {postUserHandler, getUserByIdHandler, getUserNotificationHandler, putUserNotification}
