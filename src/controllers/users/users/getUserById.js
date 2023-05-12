require('dotenv').config();
const { User } = require("../../../db")

const getUserById = async (id) => {
    const findUser = await User.findByPk(id)

            return findUser ? findUser : "No se encontró al usuario"
        
}

module.exports = { getUserById }