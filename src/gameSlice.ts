import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { changeLanguage } from 'i18next';


const STATIC_TRICK_LIST = [
    "",
    "",
    "",
    "ハチタンが大きい",
    "404",
    "Paga",
    "Twitterのロゴ",
];

const initialState = {
        count:0,
        remainingTricksList: STATIC_TRICK_LIST,
        currentTrick: "",
}


function getRandomItemAndRemove(items: string[]): { item: string, newArray: string[] } {
    if (items.length === 0) {
      return { item: "", newArray: items };
    }
  
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];
    const newArray = items.filter((_, index) => index !== randomIndex);
  
    return { item, newArray };
  }


const gameSlice = createSlice({
    name: "gameState",
    initialState,
    reducers:{
        correct: (state, action: PayloadAction<string>)=>{
            console.log(state.currentTrick +" " +state.count);
            state.count ++;

            const result = getRandomItemAndRemove(state.remainingTricksList);
            state.currentTrick = result.item;
            state.remainingTricksList = result.newArray;
        },
        mistake: (state, action: PayloadAction<string>)=>{
            console.log("mistake " + state.currentTrick +" " +state.count);
            state.count = 0;
            state.remainingTricksList = STATIC_TRICK_LIST;
            
            const result = getRandomItemAndRemove(state.remainingTricksList);
            state.currentTrick = result.item;
            state.remainingTricksList = result.newArray;
        },
        
        setTrick_Debug: (state, action: PayloadAction<string>)=>{
            state.currentTrick = action.payload;
        }
    }
})

export const {correct,mistake,setTrick_Debug} = gameSlice.actions;

export default gameSlice.reducer;