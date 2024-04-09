import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async () => {
    try {
      const response = await axios.get('https://660d67626ddfa2943b344fb7.mockapi.io/user');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export const selectUser = (state) => state.loginInfo.user;
export const selectLoading = (state) => state.loginInfo.loading;
export const selectError = (state) => state.loginInfo.error;

export default loginSlice.reducer;
