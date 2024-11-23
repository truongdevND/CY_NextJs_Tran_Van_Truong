import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      userName: '',
      setUserStore: (userName) =>
        set(() => ({
          userName,
        })),
    }),
    {
      name: 'user', 
    }
  )
);

export default useUserStore;
