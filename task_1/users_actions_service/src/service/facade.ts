import { Action, UserCreatedAction } from './action';
import { ActionType } from '../consts';
import { getFactoryClassByActionType } from './actions.factory';
import { DbActionSaver } from './action.saver';
import { DbActionFetcher, IActionFetcher } from './action.fetcher';
import Serializer from './action.serializer';

export default class ServiceFacade {
    serializer: Serializer;
    fetcher: IActionFetcher;

    constructor() {
        this.serializer = new Serializer();
        this.fetcher = new DbActionFetcher();
    }

    buildAction(actionType: ActionType, userId: number): Action {
        console.log(actionType);
        const Factory = getFactoryClassByActionType(actionType);
        const factory = new Factory();
        return factory.build(userId);
    }
    async getActions(limit: number = 10, page: number = 1, userId: number | undefined = undefined): Promise<Action[]> {
        const offset = (page - 1) * limit;
        if (userId) {
            return await this.fetcher.getActionsByUserId(userId, limit, offset)
        }
        return await this.fetcher.getActions(limit, offset);
    }
    async saveAction(action: Action) {
        const saver = new DbActionSaver();
        await saver.save(action);
    }
    serializeAction(action: Action): object {
        return this.serializer.serialize(action);
    }
    serializeActions(actions: Array<Action>): Array<object> {
        return this.serializer.serializeMany(actions);
    }
}