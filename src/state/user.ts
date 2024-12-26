import {getStorage} from '../utils/getStore';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
interface UserStore {
  username: string;
  isFirstTime: boolean;
  setUsername: (username: string) => void;
  setIsFirstTime: (isFirstTime: boolean) => void;
  reset: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      username: '',
      isFirstTime: false,
      setUsername: (username: string) => set({username}),
      setIsFirstTime: (isFirstTime: boolean) => set({isFirstTime}),
      reset: () => set({username: '', isFirstTime: false}),
    }),
    {
      name: 'user',
      version: 1,
      storage: getStorage(),
    },
  ),
);

export default useUserStore;
