import { cards } from '@app/mock';
import { CardProps } from '@type/app';
import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  entities: CardProps[];
  activeCards: number;
};
type SetIsDone = { payload: { id: string; isDone: boolean } };

const initialState: initialState = {
  entities: [...cards],
  activeCards: cards.filter((card) => !card.isDone).length,
};

const getActiveCardsNumber = (state: CardProps[]) => {
  return [...state].filter((card) => !card.isDone).length;
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setIsDoneTask: (state, action: SetIsDone) => {
      const { id, isDone } = action.payload;
      const currentCard = state.entities.find((card) => card.id === id);
      if (!currentCard) return;
      currentCard.isDone = isDone;
      state.activeCards = getActiveCardsNumber(state.entities);
    },
    deleteTask: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      const updatedCards = state.entities.filter((card) => card.id !== id);
      state.activeCards = getActiveCardsNumber(updatedCards);
      state.entities = [...updatedCards];
    },
  },
});
export const { setIsDoneTask, deleteTask } = cardsSlice.actions;
export const fetchCardsReducer = cardsSlice.reducer;
