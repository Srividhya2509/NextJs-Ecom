import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "register/registerUser",
  async (userData) => {
    try {
      const response = await axios.post('https://660d67626ddfa2943b344fb7.mockapi.io/user', userData);
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
);

export const signUpSlice = createSlice({
  name: "signUpInfo",
  initialState: {
    userDetails: [],
    loading: false,
    error:null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectUser = (state) => state.signUp.userDetails;

export default signUpSlice.reducer;
