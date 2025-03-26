import { Request, Response } from 'express';
import { GtmService } from '@modules/gtm/services/gtm.service';

const gtmService = new GtmService();

export const handleGenericEvent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      status,
      subid,
      payout,
      currency,
      user_email,
      user_phone,
      ddi,
      utm_campaign,
    } = req.query;

    if (!status || (status !== 'purchase' && status !== 'sign_up')) {
      return res.status(400).json({ error: 'Invalid status. Use "purchase" or "sign_up".' });
    }

    const payload: Record<string, any> = {
      clickId: subid || 'default-subid',
      timeStamp: new Date().toISOString(),
      utm_campaign,
    };

    if (status === 'purchase') {
      payload.conversionValue = payout || 0;
      payload.currency = currency || 'BRL';
    }

    if (status === 'sign_up') {
      payload.email = user_email;
      payload.phone = `${ddi || ''}${user_phone || ''}`;
      payload.method = 'email';
    }

    await gtmService.sendEvent(status as 'purchase' | 'sign_up', String(payload.clickId), payload);

    return res.status(200).json({ message: `Event "${status}" successfully sent to GA4.` });
  } catch (error) {
    console.error('Error sending event:', error);
    return res.status(500).json({ error: 'Internal server error while processing event.' });
  }
};
