import { Action } from './action';
import { ActionType } from '../consts';
import { getFactoryClassByActionType } from './actions.factory';
import { DbActionSaver } from './action.saver';
import Serializer from './action.serializer';

export default class ServiceFacade {
    serializer: Serializer;
    constructor() {
        this.serializer = new Serializer();
    }
    buildAction(actionType: ActionType, userId: number): Action {
        const Factory = getFactoryClassByActionType(actionType);
        const factory = new Factory();
        return factory.build(userId);
    }
    async getActions(userId: number | undefined = undefined) {

    }
    async saveAction(action: Action) {
        const saver = new DbActionSaver();
        saver.save(action);
    }
    serializeAction(action: Action): object {
        return this.serializer.serialize(action);
    }
    serializeActions(actions: Array<Action>): Array<object> {
        return this.serializer.serializeMany(actions);
    }
}