import {ITicker} from '@/interfaces/models/ticker';

export interface ITickerCardProps {
  info: Pick<
    ITicker,
    'id' | 'name' | 'symbol' | 'price_usd' | 'percent_change_24h'
  >;
}
