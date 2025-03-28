//Burada Loading,Language,Setting gibi sistemin heryerinde kullanılacak stateler tutulabilir
//Fazla şişerse ayırıladabilir.
//şimdilik sadece language yapısını burada kurguluyorum...

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../Api/ApiService";

//Axios isteği ile dil yapısını sisteme dahil ediyorum
//Normal şartlarda doğrudan import diyerek json dosyasını projeye dahil edip kullanabiliriz.
//Fakat yarın öbür gün diller, api isteği atılıp veritabanından vs. çekilecek olursa sorun yaşanır
//Ek olarak büyük bir dosyada import etmek sistemi yavaşlatır o yüzden ilk sayfa yüklendiğinde bir defa çekiliyor
//Performans için persistReducer ile localStorage'ye kaydedilebilir.
export const getLanguageList = createAsyncThunk(
    'language/getLanguageList',
    async (_, { dispatch }) => {
        const response = await getData('language.json', '/');

        if (response.success) dispatch(setLanguageData(response.data));

        return response;
    }
)
const globalSlice = createSlice({
    name: 'global',
    initialState: {
        selectedLang: null,
        languageData: [],
    },
    reducers: {
        setSelectedLang: (state, action) => {
            state.selectedLang = action.payload;
        },
        setLanguageData: (state, action) => {
            state.languageData = action.payload;
        }
    }
});

export const { setSelectedLang,setLanguageData } = globalSlice.actions;
export default globalSlice.reducer;