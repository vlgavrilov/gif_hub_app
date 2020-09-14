const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true
        },
        hashedPassword: {
            type: DataTypes.STRING,
            required: true
        },

    }, {
        freezeTableName: true,
    } );
};
