import { Router } from 'express';
import { handleGenericEvent } from '@modules/gtm/controllers/gtm.controller';

const gtmRouter = Router();

gtmRouter.get('/', handleGenericEvent);

export { gtmRouter };
