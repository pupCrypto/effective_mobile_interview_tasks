import { Action } from "./action";

export default class Serializer {
    serialize(action: Action): object {
        return {
            type: action.type,
            user_id: action.userId
        };
    }
    serializeMany(actions: Array<Action>): Array<object> {
        return actions.map(action => this.serialize(action));
    }
}
