import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
export const useConnection = (
  setOpenNotification: (
    message: string,
    type: 'error' | 'success' | 'warning' | 'info',
  ) => void,
) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setOpenNotification(
          'No internet connection. Please check your connection and try again.',
          'error',
        );
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);
};
