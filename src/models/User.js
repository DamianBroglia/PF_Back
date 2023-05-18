const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        validator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        picture: {
            type: DataTypes.STRING,
        },
        notification: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        timestamps: false
    });
};
