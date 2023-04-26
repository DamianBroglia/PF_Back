require("dotenv").config();
const { User, UserInfo } = require("../../../db");

const postUser = async (
  userName,
  email,
  password,
  lastName,
  social,
  socialRed
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
    });
    // obj = { userName, email, password }
    // objTwo = { lastName, social, socialRed }
    // await User.create(obj)
    // await UserInfo.create(objTwo)
    // res.status(200).json(obj)
    return(newUserDb)
  }
};

module.exports = { postUser };
