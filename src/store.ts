import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './languageSlice';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    gameState: gameReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;