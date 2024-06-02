import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { changeLanguage } from 'i18next';


const initialState = {
    language: 'ja',
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers:{
        setLanguage: (state, action: PayloadAction<string>)=>{
            state.language = action.payload;
            changeLanguage(action.payload);
        }
    }
})

export const {setLanguage} = languageSlice.actions;

export default languageSlice.reducer;