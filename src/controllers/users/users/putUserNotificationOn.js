require('dotenv').config();
const { User } = require("../../../db")

const putUserNotificationOn = async (id, notification) => {
    const findUser = await User.findByPk(id)
    if (findUser) {
	 await findUser.update({notification: !notification});
    }
    return findUser ? findUser : ""
}

module.exports = { putUserNotificationOn };
