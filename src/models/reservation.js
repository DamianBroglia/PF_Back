const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("reservation", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        serviceDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateOfPurchase: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        timestamps: false
    });
};