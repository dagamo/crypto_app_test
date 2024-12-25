import {ITicker} from '@/interfaces/models/ticker';

export type TTicker = Pick<
  ITicker,
  'id' | 'name' | 'symbol' | 'price_usd' | 'percent_change_24h'
>;
export interface ITickerCardProps {
  info: TTicker;
  getImage: (symbol: string) => string;
  onPressItem: (info: TTicker) => void;
}
