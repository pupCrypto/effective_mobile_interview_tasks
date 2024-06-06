const CONFIG = require('../../config');
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER, CONFIG.DB_PWD, {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT
});


sequelize.authenticate();
module.exports = sequelize;
