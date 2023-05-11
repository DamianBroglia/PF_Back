const { User } = require("../../../db")

const getUserNotification = async () => {
    const findUserNotification = await User.findAll({where: {notification:true}})

    const userEmail = findUserNotification.map(e => e.email)

            return userEmail
        
}

module.exports = { getUserNotification }