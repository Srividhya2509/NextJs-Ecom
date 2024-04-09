
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts =createAsyncThunk(
    "products/fetchProducts",
    async () => {
      try {
      const response = await axios.get('https://dummyjson.com/products');
      const data = await response.data; 
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
)

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: 'productInfo',
  initialState,
  reducers: {
    
  },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = null;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; 
          });
      },
    });
    
    export const selectProducts = (state) => state.productInfo.products;
    export const selectLoading = (state) => state.productInfo.loading;
    export const selectError = (state) => state.productInfo.error;
    
    export default productSlice.reducer;