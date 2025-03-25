import { Request, Response } from 'express';
import { GtmService } from '@modules/gtm/services/gtm.service';

const gtmService = new GtmService();

export const sendSignupEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { clientId, email } = req.body;

    await gtmService.sendEvent('sign_up', clientId, {
      method: 'email',
      email,
    });

    res.status(200).json({ message: 'SIGNUP event sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sendPurchaseEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { clientId, value, currency, transaction_id } = req.body;

    await gtmService.sendEvent('purchase', clientId, {
      value,
      currency,
      transaction_id,
    });

    res.status(200).json({ message: 'PURCHASE event sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
