const { DataTypes, Model } = require('sequelize');
const { GENDER } = require('../consts');
const { getEnumValues } = require('../utils/general');
const sequelize = require('../services/db/connector');

class User extends Model {}
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'users',
  },
);

User.sync();

module.exports = User;
