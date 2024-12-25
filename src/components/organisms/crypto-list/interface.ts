import {ITicker} from '@/interfaces/models/ticker';
import {IHeaderCryptoListProps} from '../header-crypto-list/interface';

export interface ICryptoList extends Pick<IHeaderCryptoListProps, 'onSearch'> {
  data: ITicker[];
  isLoading: boolean;
}
