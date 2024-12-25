import {TTicker} from '@/components/molecules/ticker-card/interface';
import {getStorage} from '../utils/getStore';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
interface TickerStore {
  selected: TTicker | null;
  setSelected: (selected: TTicker) => void;
  reset: () => void;
}

const useTickerStore = create<TickerStore>()(
  persist(
    set => ({
      selected: null,
      setSelected: (selected: TTicker) => set(state => ({...state, selected})),
      reset: () => set({selected: null}),
    }),
    {
      name: 'ticker',
      version: 1,
      storage: getStorage(),
    },
  ),
);

export default useTickerStore;
