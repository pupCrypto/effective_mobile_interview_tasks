import { Action } from "./action";
import { getFactoryClassByActionType } from "./actions.factory";
import UserAction from "../db/models";

export interface IActionFetcher {
    getActions(limit: number, offset: number): Promise<Action[]>;
    getActionsByUserId(userId: number, limit: number, offset: number): Promise<Action[]>;
}

export class DbActionFetcher implements IActionFetcher {
    protected buildActions(dbActions: any[]) {
        return dbActions.map(action => {
            const Factory = getFactoryClassByActionType(action.action_type);
            const factory = new Factory();
            return factory.build(action.user_id);
        });
    }

    async getActions(limit: number = 10, offset: number = 0): Promise<Action[]> {
        const dbActions: any[] = await UserAction.findAll({limit: limit, offset: offset});
        return this.buildActions(dbActions);
    }
    async getActionsByUserId(userId: number, limit: number, offset: number): Promise<Action[]> {
        const dbActions: any[] = await UserAction.findAll({limit: limit, offset: offset, where: { user_id: userId }});
        return this.buildActions(dbActions);
    }
}
