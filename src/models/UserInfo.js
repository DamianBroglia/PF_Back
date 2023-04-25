const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("userInfo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        social: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        socialRed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });
};