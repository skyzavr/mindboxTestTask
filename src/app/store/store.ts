import { configureStore } from '@reduxjs/toolkit';
import { fetchCardsReducer } from '@widgets/Cards/model/slice';
import { filterReducer } from '@widgets/Filter/model/slice';

export const store = configureStore({
  reducer: {
    cards: fetchCardsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
