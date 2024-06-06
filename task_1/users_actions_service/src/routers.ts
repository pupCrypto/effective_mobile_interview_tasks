import { Router } from 'express';
import { saveAction, getActions } from './controllers';

const router = Router();

router.get('/actions', getActions);
router.post('/actions', saveAction);

export default router;