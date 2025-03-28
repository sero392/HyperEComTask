import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postData } from '../Api/ApiService';
import { DATA_LENGTH_PER_PAGE, GET_PRODUCT_URL, PRODUCT_DATA_LENGTH } from '../Commons/Constants/Constants';


export const getProductList = createAsyncThunk(
    "product/getProductList",
    async (_, { getState }) => {

        const state = getState();
        const { currentPage, dataCountPerPage, productCategoryID } = state.product.filterModel;
        const response = await postData(`${GET_PRODUCT_URL}?page=${currentPage}&pageSize=${dataCountPerPage}&productCategoryID=${productCategoryID}`);
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: null,//Projede şuanda kullanılmıyor, gerekli görülürse silinmeli.
        filterModel: {
            currentPage: 1,
            productCategoryID: 0,
            dataCountPerPage: DATA_LENGTH_PER_PAGE,
        },
        productDataCount: PRODUCT_DATA_LENGTH //Böyle sabit verilmesinin sebebi api'de toplam ürün sayısını gösteren değeri bulamadım
        //bu yüzden elle hesaplayıp verdim
    }, reducers: {
        setProductDataCount: (state, action) => {
            state.productDataCount = action.payload;
        },
        setFilterModel: (state, action) => {
            state.filterModel = {
                ...state.filterModel,
                ...action.payload,
            };
        }
    },
    extraReducers: (builder) => {
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
export const { setProductDataCount, setFilterModel } = productSlice.actions;
export default productSlice.reducer;