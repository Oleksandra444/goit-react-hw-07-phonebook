import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
      },
      resetFilter(state, action) { 
      state.filter = '';
      }
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter, resetFilter } = filterSlice.actions;

export const getFilter = state => state.filter.filter;