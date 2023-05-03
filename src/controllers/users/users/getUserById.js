require('dotenv').config();
const { User } = require("../../../db")

const getUserById = async (userId) => {
    const findUser = await User.findAll()
    const userExists = findUser.find(e => e.id === Number(userId))
        if (userExists) {
            return userExists
        } else {
            return
        }
}

module.exports = { getUserById }