import {ITicker} from '@/interfaces/models/ticker';
import {IHeaderCryptoListProps} from '../header-crypto-list/interface';
import {ITickerCardProps} from '@/components/molecules/ticker-card/interface';

export interface ICryptoList
  extends Pick<IHeaderCryptoListProps, 'onSearch'>,
    Pick<ITickerCardProps, 'getImage' | 'onPressItem'> {
  data: ITicker[];
  isLoading: boolean;
}
