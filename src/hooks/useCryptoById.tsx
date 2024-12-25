import {QueryKeys} from '@/interfaces/enums/query-keys';
import CryptoService from '@services/crypto';
import axios from '@/utils/axios';
import {QueryObserver, useQuery, useQueryClient} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

export const useCryptoById = (id?: string) => {
  const cryptoService = new CryptoService(axios);
  const [requestCount, setRequestCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(true);
  const queryClient = useQueryClient();
  const observer = new QueryObserver(queryClient, {
    queryKey: [QueryKeys.Crypto],
  });

  const {isLoading, isError, data} = useQuery({
    queryFn: () => cryptoService.getTickerById(id!),
    queryKey: [QueryKeys.Crypto],
    refetchOnReconnect: true,
    enabled: isEnabled,
    //refetch interval every 30 seconds
    refetchInterval: 3000,
    networkMode: 'offlineFirst',
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const unsubscribe = observer.subscribe(() => {
      setRequestCount(prev => prev + 1);
      if (requestCount >= 5) {
        setIsEnabled(false);
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestCount]);
  return {
    isError,
    isLoading: isLoading,
    data,
  };
};
