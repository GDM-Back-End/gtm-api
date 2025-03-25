import { Request, Response } from 'express';
import { GtmService } from '@modules/gtm/services/gtm.service';

const gtmService = new GtmService();

export const handleGenericEvent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { subid, status, payout, currency, user_email, user_phone } = req.params;

    if (!subid || !status) {
      return res.status(400).json({ error: 'Campos obrigatórios: subid e status' });
    }

    if (status !== 'purchase' && status !== 'sign_up') {
      return res.status(400).json({ error: 'Status inválido. Use "purchase" ou "sign_up"' });
    }

    let payload: Record<string, any> = {
      clickId: subid,
      timeStamp: new Date().toISOString(),
    };

    if (status === 'purchase') {
      payload.conversionValue = payout || 0;
      payload.currency = currency || 'BRL';
    }

    if (status === 'sign_up') {
      payload.email = user_email;
      payload.phone = user_phone;
      payload.method = 'email';
    }

    await gtmService.sendEvent(status, subid, payload);

    return res.status(200).json({ message: `Evento ${status} enviado com sucesso.` });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao processar evento.' });
  }
};
