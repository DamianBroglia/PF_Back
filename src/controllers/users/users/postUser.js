require("dotenv").config();
const { User } = require("../../../db");

const postUser = async (
  name,
  email,
  validator,
  lastName,
  picture
) => {
  const findUser = await User.findAll({
    where: {
      validator:validator,
    },
  });
  
  if (findUser[0]) {
    console.log(findUser[0])
          return findUser[0]
  } else {
    
    const newUserDb = await User.create({
      name,
      email,
      validator,
      lastName,
      picture
    });
    return(newUserDb)
  }
};

module.exports = { postUser };

