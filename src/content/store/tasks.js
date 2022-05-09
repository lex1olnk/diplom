import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
    loading: false,
  },
  reducers: {
    setItem: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setItem } = dataSlice.actions;

export default dataSlice.reducer;
