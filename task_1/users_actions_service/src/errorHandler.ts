import { NextFunction, Request, Response } from 'express';
import { ResMsg } from './consts';

export default function errorHandler(func: any) {
    return function handler(req: Request, res: Response, next: NextFunction) {
        func(req, res, next).catch((e: Error) => {
            console.error(e);
            return res.status(500).send(ResMsg.INTERNAL_ERROR);
        })
    }
}
