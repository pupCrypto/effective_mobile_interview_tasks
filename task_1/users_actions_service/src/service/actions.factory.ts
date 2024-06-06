import {
    Action,
    UserCreatedAction,
    UserModifiedAction
} from './action';
import { ActionType } from '../consts';

export interface IActionFactory {
    build(userId: number): Action
}

export class UserCreatedActionFactory implements IActionFactory {
    build(userId: number) {
        return new UserCreatedAction(userId);
    }
}

export class UserModifiedActionFactory implements IActionFactory {
    build(userId: number) {
        return new UserModifiedAction(userId);
    }
}

export function getFactoryClassByActionType(type: ActionType) {
    switch (type) {
        case ActionType.USER_CREATED: {
            return UserCreatedActionFactory;
        }
        case ActionType.USER_MODIFIED: {
            return UserModifiedActionFactory;
        }
        default: {
            throw new Error('No factory for such type');
        }
    }
}