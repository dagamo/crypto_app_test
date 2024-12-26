import {TTicker} from '@/components/molecules/ticker-card/interface';
import {getStorage} from '../utils/getStore';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
interface TickerStore {
  selected: TTicker | null;
  pricesData: {time: string; price: number}[];
  setSelected: (selected: TTicker) => void;
  setPricesData: (data: {time: string; price: number}) => void;
  reset: () => void;
  resetPrices: () => void;
  clearPrices: () => void;
}

const useTickerStore = create<TickerStore>()(
  persist(
    set => ({
      selected: null,
      pricesData: [],
      setSelected: (selected: TTicker) => set(state => ({...state, selected})),
      setPricesData: (data: {time: string; price: number}) =>
        set(state => ({...state, pricesData: [...state.pricesData, data]})),
      reset: () => set({selected: null}),
      resetPrices: () =>
        set(state => ({
          ...state,
          pricesData: state.pricesData.length ? state.pricesData.slice(-1) : [],
        })),
      clearPrices: () => set(state => ({...state, pricesData: []})),
    }),
    {
      name: 'ticker',
      version: 1,
      storage: getStorage(),
    },
  ),
);

export default useTickerStore;
