'use client';

import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export const usePersistentBearStore = create(
    persist(
        (set, get) => ({
            bears: 0,
            increasePopulation: () => set({ bears: get().bears + 1 }),
        }),
        {
            name: 'bear-storage',
            getStorage: () => localStorage, // persist store in localStorage
        }
    )
)
