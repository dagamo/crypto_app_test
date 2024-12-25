import {QueryKeys} from '@/interfaces/enums/query-keys';
import CryptoService from '@services/crypto';
import axios from '@/utils/axios';
import {useQuery} from '@tanstack/react-query';

export const useCrypto = () => {
  const cryptoService = new CryptoService(axios);
  const {isLoading, isError, data} = useQuery({
    queryFn: () => cryptoService.getTickers(),
    queryKey: [QueryKeys.Crypto],
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });
  return {
    isError,
    isLoading,
    data,
  };
};
