import { Router } from 'express';
import { handleGenericEvent } from '@modules/gtm/controllers/gtm.controller';

const gtmRouter = Router();

gtmRouter.post(
    '/event/:subid/:status/:payout?/:currency?/:user_email?/:user_phone?',
    handleGenericEvent
  );

export { gtmRouter };
