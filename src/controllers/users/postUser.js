require('dotenv').config();
const { User, UserInfo } = require("../../db")

const postUser = async (req, res) => {
    const { userName, email, password, lastName, social, socialRed } = req.body
    try {
        const findUser = await User.findAll()
        const userExists = findUser.find(e => e.email === email)
        if (userExists) {
            res.status(400).end("You are already registered with that emailw")
        } else {
            obj = { userName, email, password }
            objTwo = { lastName, social, socialRed }
            await User.create(obj)
            await UserInfo.create(objTwo)
            res.status(200).json(obj)
        }
    } catch (error) {
        res.status(400).end(error.message)
    }
}

module.exports = { postUser }