const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define("hotel", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    stars: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    priceDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
})}
