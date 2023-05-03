const { getUserqById } = require("../controllers/users/users/getUserById")
const {postUser} = require("../controllers/users/users/postUser")
const { getUserById } = require("../controllers/users/users/getUserById")

const postUserHandler = async(req, res) =>{
    try {
        const { userName, email, password, lastName, social, socialRed } = req.body
        const newUser = await postUser(userName, email, password, lastName, social, socialRed)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error: error.massage})
    }
}

const getUserByIdHandler = async(req, res) => {
    try{
        const { userId } = req.params
        const userById = await getUserById(userId);
        res.status(200).json(userById)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}




module.exports = {postUserHandler, getUserByIdHandler}