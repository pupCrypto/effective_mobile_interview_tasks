import { DataTypes, Model } from "sequelize";
import { $enum } from "ts-enum-util";
import sequelize from "./connector";
import { ActionType } from "../consts";

class UserAction extends Model {}
UserAction.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    action_type: {
        type: DataTypes.ENUM,
        values: $enum(ActionType).getValues(),
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'users_actions',
  },
);

UserAction.sync();

export default UserAction;
