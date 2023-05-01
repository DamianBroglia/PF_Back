const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("reservation", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        dateOfPurchase: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        numOfTravels: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        timestamps: false
    });
};