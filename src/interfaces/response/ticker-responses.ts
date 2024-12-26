import {ITicker} from '../models/ticker';

export interface ITickerAvailable {
  coins_num: number;
  time: number;
}

export interface ITickerGetResponse {
  data: ITicker[];
  info: ITickerAvailable;
}
export interface ITickerGetByIdResponse {
  data: ITicker[];
}
