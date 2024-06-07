
export enum ActionType {
    USER_CREATED = 'user-created',
    USER_MODIFIED = 'user-modified'
}

export enum ResMsg {
    ACTION_SAVED = 'Событие было успешно сохранено',
    CANNOT_SAVE_ACTION = 'Не удалось сохранить событие',
    INTERNAL_ERROR = 'Internal Server Error',
}

export enum ResStatus {
    OK = 'ok',
    ERROR = 'error'
}