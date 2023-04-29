const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("restaurant", {
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
        img: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        //Pensandolo mejor, que el menú este en la descripcion
        // menu: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: false,
        // },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false
        });
};
