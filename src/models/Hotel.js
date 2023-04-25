const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define("hotel", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        },
    name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    location: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        },
    
    stars: {
          type: DataTypes.FLOAT,
          allowNull: false,
      }, 
    });
};
