import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {postData} from '../Api/ApiService';
import { DATA_LENGTH_PER_PAGE, GET_PRODUCT_URL } from '../Commons/Constants/Constants';

//Tek bir yerden url değiştirmek için buraya konuldu
//Normalde env dosylarında saklanılabilir.

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (currentPage = 1) => {
    const response = await postData(`${GET_PRODUCT_URL}?page=${currentPage}&pageSize=${DATA_LENGTH_PER_PAGE}`);
    return response.data;
  }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: null,
    },reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getProductList.pending, (state) => {
            state.status = 'loading';
        }).addCase(getProductList.fulfilled, (state, action) => {
            state.status = 'success';
            state.products = action.payload;
        }).addCase(getProductList.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export default productSlice.reducer;