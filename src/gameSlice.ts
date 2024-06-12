import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const STATIC_TRICK_LIST = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "ハチタンが大きい",
  "ハチタンが大きい",
  "404",
  "Paga",
  "Twitterのロゴ",
  "ハチタンの顔が悪い",
  "チーターよりはやい！",
  "YAYAYA",
  "23時61分発",
  "時刻表の時刻がランダム",
  "時刻表がカラフル",
  "ハチタンのアイコンが変",
  "運行情報の現在時刻が12月34日",
  "トピックスの数が多い",
  "押すな！ボタン",
  "ニュースを見せない",
  "ガタンゴトン",
  "画像全部ハチタン",
  "運行状況がついてくる",
  "カレーの材料",
  "きさらぎ駅",
  "ゲーミングボタン",
  "歴史的ニュース",
  "二駅",
  "カルーセルがたくさん",
  "運行状況しかない",
  "背景マゼンタ",
  "180度回転",
  "でんしゃたくさんうごいてます",
  "ページ8",
];

const initialState = {
  count: 0,
  remainingTricksList: STATIC_TRICK_LIST,
  currentTrick: "",
  prevTrick: "",
};

function getRandomItemAndRemove(items: string[]): {
  item: string;
  newArray: string[];
} {
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
  reducers: {
    correct: (state, action: PayloadAction<string>) => {
      state.count++;

      state.prevTrick = state.currentTrick;

      if (state.count === 8) {
        state.currentTrick = "ページ8";
        return;
      }

      const result = getRandomItemAndRemove(state.remainingTricksList);
      state.currentTrick = result.item;
      state.remainingTricksList = result.newArray;
    },
    mistake: (state, action: PayloadAction<string>) => {
      state.count = 0;
      state.remainingTricksList = STATIC_TRICK_LIST;

      state.prevTrick = state.currentTrick;
      const result = getRandomItemAndRemove(state.remainingTricksList);
      state.currentTrick = result.item;
      state.remainingTricksList = result.newArray;
    },

    setTrick_Debug: (state, action: PayloadAction<string>) => {
      state.currentTrick = action.payload;
    },
  },
});

export const { correct, mistake, setTrick_Debug } = gameSlice.actions;

export default gameSlice.reducer;
