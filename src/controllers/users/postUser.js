require('dotenv').config();
const { Sequelize } = require('sequelize');
const { User } = require("../../db")

const postUser = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const findUser = await User.findAll()
        const userExists = findUser.find(e => e.email === email)
        if (userExists) {
            res.status(400).end("Ya estás registrado con ese correo electronico")
        } else {
            obj = { userName, email, password }
            await User.create(obj)
            res.status(200).json(obj)
        }
    } catch (error) {
        res.status(400).end(error.message)
    }
}

module.exports = { postUser }