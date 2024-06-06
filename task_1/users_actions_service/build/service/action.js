"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatedAction = exports.UserModifiedAction = exports.Action = void 0;
class Action {
    constructor(userId) {
        this.userId = userId;
    }
}
exports.Action = Action;
class UserModifiedAction extends Action {
    constructor() {
        super(...arguments);
        this.type = 1 /* ActionType.USER_MODIFIED */;
    }
}
exports.UserModifiedAction = UserModifiedAction;
class UserCreatedAction extends Action {
    constructor() {
        super(...arguments);
        this.type = 0 /* ActionType.USER_CREATED */;
    }
}
exports.UserCreatedAction = UserCreatedAction;
