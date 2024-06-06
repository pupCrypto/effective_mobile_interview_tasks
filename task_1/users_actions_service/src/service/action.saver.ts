import { Action } from "./action";

interface IActionSaver {
    save(action: Action): void;
}

export abstract class ActionSaver implements IActionSaver {
    save(action: Action): void {}
}

export class DbActionSaver extends ActionSaver {}
