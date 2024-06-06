"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModifiedActionFactory = exports.UserCreatedActionFactory = void 0;
const action_1 = require("./action");
class UserCreatedActionFactory {
    build(userId) {
        return new action_1.UserCreatedAction(userId);
    }
}
exports.UserCreatedActionFactory = UserCreatedActionFactory;
class UserModifiedActionFactory {
    build(userId) {
        return new action_1.UserModifiedAction(userId);
    }
}
exports.UserModifiedActionFactory = UserModifiedActionFactory;
