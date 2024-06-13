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
];

const STATIC_TRICK_LIST_CONSOLE: { [key: string]: string } = {
  "": "あえて、なにもしない！",
  ハチタンが大きい: "あたしをもっと大きくしてみようかな！",
  Paga: "PageをPagaにしたら、絶対気づかないんじゃない？",
  "404": "突然404エラーが出てきたら、びっくりするかな？",
  Twitterのロゴ: "あれ、Twitterのロゴってこんなのだっけ？元に戻しちゃお。",
  ハチタンの顔が悪い: "どんなイタズラを仕込もうかな……にへへ。",
  "チーターよりはやい！": "勝手にキャッチコピーを変えちゃえ！",
  YAYAYA: "こっそりロゴを変えたら絶対ばれないよ！",
  "23時61分発": "時刻表に……変な時間の電車を足しちゃえ！",
  時刻表の時刻がランダム: "時刻表をバラバラにしてみよう！",
  時刻表がカラフル: "いろんな種類の電車をふやしちゃお！",
  ハチタンのアイコンが変:
    "あたし、もっとロボットっぽい見た目にしても気づかれないかな？",
  運行情報の現在時刻が12月34日: "今の時間をこっそり変な時間にしてみよう！",
  トピックスの数が多い:
    "アイコンたくさん並べてみちゃお！たくさんあるのって面白いし！",
  "押すな！ボタン": "変なボタン用意しよう！押すかな……どうかな……",
  ニュースを見せない: "これ、今あるものをなくしたら気づかないんじゃない？",
  ガタンゴトン: "ガタンゴトン、ガタンゴトントン！",
  画像全部ハチタン: "ぜんぶあたしにしちゃお！",
  運行状況がついてくる: "こっそりスクロールについていってみよう！",
  カレーの材料: "お買い物メモといれかえてみようかな。",
  きさらぎ駅: "知らない駅を差し込んでみよ！",
  ゲーミングボタン: "ボタンをギラギラさせてかっこよくしよ～！",
  歴史的ニュース:
    "ニュースの中身、ずっと昔のものに変えても気づかないんじゃない？",
  二駅: "駅これだけ！",
  カルーセルがたくさん: "変なものがたくさんあるのっておもしろいよね！",
  運行状況しかない: "これめちゃめちゃビビるんじゃない？",
  背景マゼンタ: "この色、嫌いな人はこわいだろうな～",
  "180度回転": "ぐるっと回しちゃえ！",
  でんしゃたくさんうごいてます: "あたしがしゃべっちゃお！",
  ページ8: "もうおしまいだ～！",
};
const NUMBER_LIST_CONSOLE: string[] = [
  "挑戦、頑張ってね～！",
  "お、一ページ目突破したの？すごいね〜",
  "二ページ目も正解。まあこのくらいじゃあねぇ。",
  "三ページ目も正解、まだまだ余裕！",
  "四ページ目正解、あと半分残ってるし大丈夫！",
  "五ページ目正解……ちょっとまずいかも？",
  "六ページ目も正解！？どうしよどうしよ……",
  "七ページ目正解……うえ〜ん！",
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
    correct: (state) => {
      console.log(NUMBER_LIST_CONSOLE[state.count]);
      state.count++;

      state.prevTrick = state.currentTrick;

      if (state.count === 8) {
        state.currentTrick = "ページ8";
        return;
      }

      const result = getRandomItemAndRemove(state.remainingTricksList);
      state.currentTrick = result.item;
      state.remainingTricksList = result.newArray;
      console.log("次は……" + STATIC_TRICK_LIST_CONSOLE[state.currentTrick]);
    },
    mistake: (state) => {
      console.log("まちがえてる～！やったやった～～！");
      state.count = 0;
      state.remainingTricksList = STATIC_TRICK_LIST;

      state.prevTrick = state.currentTrick;
      const result = getRandomItemAndRemove(state.remainingTricksList);
      state.currentTrick = result.item;
      state.remainingTricksList = result.newArray;
      console.log("次は……" + STATIC_TRICK_LIST_CONSOLE[state.currentTrick]);
    },

    setTrick_Debug: (state, action: PayloadAction<string>) => {
      state.currentTrick = action.payload;
    },
  },
});

export const { correct, mistake, setTrick_Debug } = gameSlice.actions;

export default gameSlice.reducer;
