const { DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genero', {
        name: {
            type: DataTypes.STRING,
        }
    })
}