const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("userInfo", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
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