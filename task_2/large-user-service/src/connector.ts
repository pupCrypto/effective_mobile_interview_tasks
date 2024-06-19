import CONFIG from './config';
import { Sequelize, Dialect } from 'sequelize';

const sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER, CONFIG.DB_PWD, {
  host: CONFIG.DB_HOST,
  dialect: CONFIG.DB_DIALECT as Dialect,
});

sequelize.authenticate();
export default sequelize;
