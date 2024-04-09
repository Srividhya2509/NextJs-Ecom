import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
      localStorage.setItem('count', state.count);
    },
    decrementCount: (state) => {
        if (state.count > 0) { 
            state.count -= 1;
          }
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, setCount } = countSlice.actions;
export const selectCount = (state) => state.count.count;
export default countSlice.reducer;
