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
      client_id: '1234567890.1234567890',
      events: [
        {
          name: eventName,
          params: {
            ...eventParams,
            engagement_time_msec: 1,
          }
        },
      ],
    };

    console.log('Enviando payload para GA4:', payload);
    console.log('URL:', url);
    const response = await axios.post(url, payload);
    console.log('GA4 Response:', response.status, response.data);
  }
}
