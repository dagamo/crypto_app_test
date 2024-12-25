import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistStorage, StorageValue} from 'zustand/middleware';
export const getStorage = <T>(): PersistStorage<T> => {
  return {
    getItem: async (name: string) => {
      const value = await AsyncStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: StorageValue<T>) => {
      AsyncStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
      AsyncStorage.removeItem(name);
    },
  };
};
