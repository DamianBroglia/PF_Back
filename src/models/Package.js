const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("package", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        quotas: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        dateInit: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateEnd: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        timestamps: false
    });
};
