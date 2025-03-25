import { Router } from 'express';
import { sendSignupEvent, sendPurchaseEvent } from '@modules/gtm/controllers/gtm.controller';

const gtmRouter = Router();

gtmRouter.post('/signup', sendSignupEvent);
gtmRouter.post('/purchase', sendPurchaseEvent);

export { gtmRouter };
