import axios from 'axios';

export class GtmService {
  private readonly measurementId = process.env.GA_MEASUREMENT_ID;
  private readonly apiSecret = process.env.GA_API_SECRET;
  private readonly endpoint = `https://www.google-analytics.com/mp/collect`;

  async sendEvent(
    eventName: 'purchase' | 'sign_up',
    clientId: string,
    eventParams: Record<string, any>
  ): Promise<void> {
    const url = `${this.endpoint}?measurement_id=${this.measurementId}&api_secret=${this.apiSecret}`;

    const payload = {
      client_id: clientId,
      events: [
        {
          name: eventName,
          params: eventParams,
        },
      ],
    };

    await axios.post(url, payload);
  }
}
