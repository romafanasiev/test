import { createStore } from 'zustand/vanilla';

import type { CardType, UserType } from '@/app/types';

export type State = {
  cards: CardType[];
  user: UserType | null;
};

export type Actions = {
  addCard: (card: CardType) => void;
  setUserData: (email: string) => void;
  removeUserData: () => void;
};

export type MainStore = State & Actions;

export const defaultInitState: State = {
  cards: [
    {
      title: 'Test title 1',
      description: 'Test desc 1',
      content: 'Test content 1',
    },
    {
      title: 'Test title 2',
      description: 'Test desc 2',
      content: 'Test content 2',
    },
  ],
  user: null,
};

export const createMainStore = (initState: State = defaultInitState) => {
  return createStore<MainStore>()((set) => ({
    ...initState,
    addCard: (card) => set((store) => ({ cards: [...store.cards, card] })),
    setUserData: (email) => set(() => ({ user: { email } })),
    removeUserData: () => set(() => ({ user: null })),
  }));
};

