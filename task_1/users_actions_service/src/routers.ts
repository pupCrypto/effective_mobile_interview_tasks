import { Router } from 'express';
import { saveAction, getActions } from './controllers';
import { saveActionValidations, getActionsValidations, validator } from './validators';
const router = Router();

router.get('/actions', getActionsValidations, validator, getActions);
router.post('/actions', saveActionValidations, validator, saveAction);

export default router;