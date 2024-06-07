import { Router } from 'express';
import { saveAction, getActions } from './controllers';
import { saveActionValidations, getActionsValidations, validator } from './validators';
import errorHandler from './errorHandler';
const router = Router();

router.get('/actions', getActionsValidations, validator, errorHandler(getActions));
router.post('/actions', saveActionValidations, validator, errorHandler(saveAction));

export default router;
