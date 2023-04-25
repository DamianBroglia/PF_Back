require('dotenv').config();
const { User } = require("../../db")

const getUser = async (req, res) => {
    const { userId } = req.params
    try {
        const findUser = await User.findAll()
        const userExists = findUser.find(e => e.id === Number(userId))
        if (userExists) {
            res.status(200).json(userExists)
        } else {
            res.status(404).end("No se encotró al usuario")
        }
    } catch (error) {
        res.status(400).end(error.message)
    }
}

module.exports = { getUser }