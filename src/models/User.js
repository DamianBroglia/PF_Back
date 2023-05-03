const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        social: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        socialRed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false
    });
};