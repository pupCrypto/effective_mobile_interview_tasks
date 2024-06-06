import { Request, Response } from 'express';
import ServiceFacade from './service/facade';
import { ResMsg, ResStatus } from './consts';

export async function saveAction(req: Request, res: Response) {
    const service = new ServiceFacade();
    const action = service.buildAction(req.body.type, req.body.user_id);
    await service.saveAction(action);
    res.json({status: ResStatus.OK, msg: ResMsg.ACTION_SAVED});
}

export async function getActions(req: Request, res: Response) {
    const service = new ServiceFacade();
    const actions = await service.getActions();
}