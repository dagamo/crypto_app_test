import ServiceRequest from './service-request';
import {AxiosInstance, AxiosResponse} from 'axios';
import {ITickerGetResponse} from '@/interfaces/response/ticker-responses';

export default class CryptoService extends ServiceRequest {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    super('tickers');
    this.axios = axios;
  }

  async getTickers() {
    const result: AxiosResponse<ITickerGetResponse> = await this.axios.get(
      `${this.url}/?start=0&limit=50`,
    );
    return result.data;
  }
  async getTickerById(id: string) {
    const result: AxiosResponse<ITickerGetResponse> = await this.axios.get(
      `${this.url}/?id=${id}`,
    );
    return result.data;
  }
}
