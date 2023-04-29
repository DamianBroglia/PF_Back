const { DataTypes } = require("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define("activity", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeAct: {
            type: DataTypes.ENUM("treking", "bike", "travel", "relax", "show"),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
        {
            timestamps: false
        });
};