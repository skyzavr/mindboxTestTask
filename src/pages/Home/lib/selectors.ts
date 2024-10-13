import { RootState } from '@app/store/store';
export const getCards = (state: RootState) => state.cards;
export const getFilters = (state: RootState) => state.filter;
