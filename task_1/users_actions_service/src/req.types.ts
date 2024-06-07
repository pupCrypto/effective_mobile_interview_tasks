import { Request } from 'express';
import { ActionType } from './consts';

type GetActionsQuery = { size: number, page: number, user_id?: number};
export type GetActionsRequest = Request<any, any, any, GetActionsQuery>;

type SaveActionBody = { action_type: ActionType, user_id: number };
export type SaveActionRequest = Request<any, any, SaveActionBody>;