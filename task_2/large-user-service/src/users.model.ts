import { DataTypes, Model } from 'sequelize';
import { $enum } from 'ts-enum-util';
import { Gender } from './consts';
import sequelize from './connector';

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: $enum(Gender).getValues(),
    },
    has_problems: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'users',
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  },
);

User.sync();

export default User;
