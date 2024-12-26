import CryptoService from '@services/crypto';
import axios from '@/utils/axios';
import {useMutation} from '@tanstack/react-query';
import React, {useContext, useEffect, useState} from 'react';
import useTickerStore from '@/state/ticker';
import {
  initRequestInterval,
  initTimerInterval,
  MAX_TIME,
} from '@/utils/initInterval';
import NetInfo from '@react-native-community/netinfo';
import {NotificationContext} from '@/context/notification';
export const useCryptoById = (id?: string) => {
  const {setOpenNotification} = useContext(NotificationContext);
  const idTimerIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const cryptoService = new CryptoService(axios);
  const {setPricesData, resetPrices} = useTickerStore();
  const [requestCount, setRequestCount] = useState(1);
  const [isConnected, setIsConnected] = useState(true);
  const [timer, setTimer] = useState(MAX_TIME);
  const {isError, data, mutate, isPending} = useMutation({
    mutationFn: () => cryptoService.getTickerById(id!),
    networkMode: 'offlineFirst',
    onSuccess: data => {
      setTimer(MAX_TIME);
      setPricesData(parseFloat(data[0].price_usd));
    },
    onError: err => {
      setOpenNotification(err?.message || 'Something went wrong', 'error');
    },
  });
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        return setIsConnected(false);
      }
      setIsConnected(true);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const idInterval = initRequestInterval({
      count: requestCount,
      mutate,
      incrementCount: () => setRequestCount(prev => prev + 1),
      resetPrices,
      setRequestCount,
    });

    const idTimerInterval = initTimerInterval({
      decrementTimer: () => setTimer(prev => prev - 1),
      isPending,
      isConnected,
    });
    //assign to ref
    idTimerIntervalRef.current = idTimerInterval;

    return () => {
      clearInterval(idInterval);
      clearInterval(idTimerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestCount, isPending, isConnected]);

  return {
    isError,
    isLoading: true,
    data,
    timer,
  };
};
