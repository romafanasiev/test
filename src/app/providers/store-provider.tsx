'use client';

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { createMainStore } from '@/stores/';

import type { ReactNode } from 'react';
import type { MainStore } from '@/stores/';

export type StoreApi = ReturnType<typeof createMainStore>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<StoreApi>();
  if (!storeRef.current) {
    storeRef.current = createMainStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useMainStore = <T,>(selector: (store: MainStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useMainStore must be used within StoreProvider`);
  }

  return useStore(storeContext, selector);
};







