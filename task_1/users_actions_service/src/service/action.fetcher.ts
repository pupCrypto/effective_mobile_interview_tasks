import { Action } from "./action";

interface IActionFetcher {
    getActions(limit: number, offset: number): Array<Action>;
    getActionsByUserId(limit: number, offset: number): Array<Action>;
}

export abstract class ActionFetcher implements IActionFetcher {
    getActions(limit: number = 10, offset: number = 0): Array<Action> {}

    getActionsByUserId(limit: number = 10, offset: number = 0): Array<Action> {};
}

export class DbActionFetcher extends ActionFetcher {}