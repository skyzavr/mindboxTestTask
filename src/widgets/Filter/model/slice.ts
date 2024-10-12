import { createSlice } from '@reduxjs/toolkit';
import { Colors, filterOptions } from '@type/app';

type initialState = { filterByType: filterOptions; filterByColor: Colors };

const initialState: initialState = {
  filterByType: 'all',
  filterByColor: 'color',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterByColor: (state, action: { payload: Colors }) => {
      state.filterByColor = action.payload;
    },
    setFilterByType: (state, action: { payload: filterOptions }) => {
      state.filterByType = action.payload;
    },
  },
});
export const { setFilterByColor, setFilterByType } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
