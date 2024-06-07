import { Request, Response } from 'express';
import ServiceFacade from './service/facade';
import { ResMsg, ResStatus } from './consts';
import { GetActionsRequest, SaveActionRequest } from './req.types';

export async function saveAction(req: SaveActionRequest, res: Response) {
    const service = new ServiceFacade();
    const action = service.buildAction(req.body.action_type, req.body.user_id);
    await service.saveAction(action);
    res.json({status: ResStatus.OK, msg: ResMsg.ACTION_SAVED});
}


export async function getActions(req: GetActionsRequest, res: Response) {
    const service = new ServiceFacade();
    const actions = await service.getActions(req.query.size, req.query.page, req.query.user_id);
    const serActions = service.serializeActions(actions);
    res.json({status: ResStatus.OK, actions: serActions});
}