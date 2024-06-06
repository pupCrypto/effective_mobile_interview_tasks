import { ActionType } from "../consts"

interface IAction {
    userId: number;
    type: ActionType | undefined;
}

export abstract class Action implements IAction {
    readonly userId: number;
    readonly type: ActionType | undefined;

    constructor(userId: number) {
        this.userId = userId;
    }
}

export class UserModifiedAction extends Action {
    readonly type: ActionType = ActionType.USER_MODIFIED;
}

export class UserCreatedAction extends Action {
    readonly type: ActionType = ActionType.USER_CREATED;
}