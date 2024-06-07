import { body, validationResult, ValidationChain, query } from 'express-validator';
import { ActionType } from './consts';
import { $enum } from "ts-enum-util";
import { Request, Response, NextFunction } from 'express';


export const saveActionValidations = [
    body('user_id').notEmpty().isInt(),
    body('action_type').notEmpty().isIn($enum(ActionType).getValues()),
];

export const getActionsValidations = [
    query('user_id').optional().isInt(),
    query('page').optional().isInt({min: 1}).default(1),
    query('size').optional().isInt({min: 1, max: 100}).default(10)
];

export function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}