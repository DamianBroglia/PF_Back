require("dotenv").config();
const { User } = require("../../../db");

const postUser = async (
  userName,
  email,
  password,
  lastName,
  social,
  socialRed,
  notification
) => {
  const findUser = await User.findAll();
  const userExists = findUser.find((e) => e.email === email);
  if (userExists) {
    return;
  } else {
    const newUserDb = await User.create({
      userName,
      email,
      password,
      lastName,
      social,
      socialRed,
      notification
    });
    return(newUserDb)
  }
};

module.exports = { postUser };
