const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_mantenimiento', 'tu_usuario', 'tu_contraseña', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
