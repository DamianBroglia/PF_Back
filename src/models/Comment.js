const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("comment", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false
    });
};