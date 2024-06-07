import { Action } from "./action";
import UserAction from "../db/models";

interface IActionSaver {
    save(action: Action): void;
}

export abstract class ActionSaver implements IActionSaver {
    save(action: Action): void {}
}

export class DbActionSaver extends ActionSaver {
    async save(action: Action): Promise<void> {
        const userAction = UserAction.build({user_id: action.userId, action_type: action.type});
        await userAction.save();
    }
}
