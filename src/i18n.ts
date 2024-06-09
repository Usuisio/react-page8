import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { StartCard } from "./component/GameSystem/StartCard";

const getBrowserLanguage = () => {
  return navigator.language || "ja";
};

i18n.use(initReactI18next).init({
  lng: getBrowserLanguage(),
  fallbackLng: "ja",
  resources: {
    en: {
      translation: {
        StartCardMessage:
          "This is the homepage of a certain railway company. <br/> However, due to the mischief of the chat AI 'Hachitan', <br/> various contents have been changed to strange things! <br/> Please help us investigate to restore it to normal.",
        StartCardMessage2:
          "If you find any mischief, go back up and 'report' it.",
        StartCardMessage3: "If there's nothing wrong, continue downwards.",
        StartCardMessage4:
          "There are 8 pages in total to investigate. Thank you.",
        StartCardMessage5: "From the administrator",

        EndCardMessage1: "Thanks to you,",
        EndCardMessage2_1: "We have caught the mischievous AI, Hachitan.",
        EndCardMessage2_2: "All the mischief on the homepage has been fixed.",
        EndCardMessage3:
          "If anything happens again, we would like your cooperation.",
        EndCardMessage4: "From the administrator",

        HachitanSnickering1: "Too bad! There's nothing here! Try again!",
        HachitanSnickering2: "Oh, you didn't notice? Try again!",        

        ChatbotPRTitle: 'Introducing the Chat AI "Hachitan"!',
        ChatbotPRDetail:
          "The Yawata Railway website now features an AI chatbot!<br/>Feel free to ask anything, from departure times to transfer information!",
        ChatbotPRDetail1:
          "The Yawata Railway website now features an AI chatbot!",
        ChatbotPRDetail2:
          "Feel free to ask anything, from departure times to transfer information!",
        TryChatbot: "Try it",

        RouteMap: "Route Map",
        Timetable: "Timetable",
        ServiceStatus: "Service Status",
        Chatbot: "Chatbot",

        NishiYahata: "Nishi-Yahata",
        YahatadaiKoko: "Yahata Center High School",
        Ohgakubo: "Ohgakubo",
        YahataColorfulPark: "Yahata Colorful Park",
        Ginshin: "Ginshin",
        TsuyamaStadium: "Tsuyama Stadium",
        Tsuyama: "Tsuyama",
        Airport: "International Airport",

        HolidayPRTitle: "Connecting Communities, Delivering Hearts.",
        HolidayPRDetail: "Yawata Railway supports your life 365 days a year.",
        HolidayPRTitle_Gatangoton: "Clickety-clack, clickety-clack.",
        HolidayPRDetail_Gatangoton: "Clickety-clack, choo-choo.",

        currentStatus: "{{dateTime}} currently operating normally",
        dateTimeFormat: "{{hours}}:{{minutes}}",

        news1Date: "June 9, 2024",
        news1Title: "Announcement of Yawata Railway Website Renewal",

        news2Date: "May 31, 2024",
        news2Title: "Announcement of Summer Stamp Rally Event",

        news3Date: "May 15, 2024",
        news3Title: "Support Event for Tsuyama Thunder Lance!",

        news4Date: "April 30, 2024",
        news4Title: "Increased Train Services during GW Period",

        news5Date: "April 4, 2024",
        news5Title: "Announcement of Ginnan Station Elevation Construction",

        latestNews: "Latest News",
        routeMap: "Route Map",
        nishiyahataTimetable: "Nishi-Yahata Station Timetable",

        TransferToJRLine: "Transfer to JR Line",
        ConnectionBusesDepartFromPlatform1:
          "Connection buses depart from platform 1",
        TransferToSubwayLine: "Transfer to Subway Line",
        ExpressStopsOnGameDays: "Express stops on game days",

        RedIndicatesExpressTrains: "Red indicates express trains.",
        Time: "Time",
        Weekdays: "Weekdays",
        Holidays: "Holidays",

        DontPush: "Don't Push!",

        Report: "Report!",
        FinishReport: "Report Complete!",
      },
    },
    ja: {
      translation: {
        StartCardMessage:
          "ここは、ある鉄道会社のホームページ。<br/>しかし、チャットAI「ハチタン」のイタズラで、<br/>あちこちがヘンテコな内容に書き換えられてしまいました！<br/>元に戻すために、調査を手伝ってください。",
        StartCardMessage2: "イタズラを見つけたら、上に戻って「報告」しよう。",
        StartCardMessage3: "何もなかったら、そのまま下に進もう。",
        StartCardMessage4: "調査対象は全部で8ページ。よろしくね。",
        StartCardMessage5: "管理者より",

        EndCardMessage1: "ありがとう！あなたのおかげで",
        EndCardMessage2_1: "イタズラAIのハチタンを捕まえられたよ。",
        EndCardMessage2_2: "ホームページのイタズラは全部直せたよ。",
        EndCardMessage3: "また何かあれば、協力してほしい。",
        EndCardMessage4: "管理者より",

        HachitanSnickering1: "残念！そこには何にも仕掛けてないよ～だ！ 最初からやり直し！",
        HachitanSnickering2: "あれれ、気づかなかったの？ 最初からやり直し！",

        ChatbotPRTitle: "チャットAI「ハチタン」デビュー！",
        ChatbotPRDetail:
          "八幡鉄道ホームページにAIチャットボットが登場！<br/>発車時刻や乗り換え案内など、なんでも聞いてね！",
        ChatbotPRDetail1: "八幡鉄道ホームページにAIチャットボットが登場！",
        ChatbotPRDetail2: "発車時刻や乗り換え案内など、なんでも聞いてね！",
        TryChatbot: "使ってみる",

        RouteMap: "路線図",
        Timetable: "時刻表",
        ServiceStatus: "運行状況",
        Chatbot: "ハチタン",

        NishiYahata: "西八幡",
        YahatadaiKoko: "八幡台高校",
        Ohgakubo: "大ヶ久保",
        YahataColorfulPark: "八幡カラフルパーク",
        Ginshin: "銀新",
        TsuyamaStadium: "津山スタジアム",
        Tsuyama: "津山",
        Airport: "国際空港",

        HolidayPRTitle: "地域とつながる、心を運ぶ。",
        HolidayPRDetail: "八幡鉄道は365日、皆様の生活を支え続けます。",
        HolidayPRTitle_Gatangoton: "ガタンゴトン、ガタンゴトン。",
        HolidayPRDetail_Gatangoton: "ガタンゴトン、ガタンゴトントン。",

        currentStatus: "{{dateTime}}現在、平常通り運行しています",
        dateTimeFormat: "{{month}}月{{day}}日 {{hours}}時{{minutes}}分",

        news1Date: "2024年6月9日",
        news1Title: "八幡鉄道ホームページリニューアルのお知らせ",

        news2Date: "2024年5月31日",
        news2Title: "夏のスタンプラリー開催のお知らせ",

        news3Date: "2024年5月15日",
        news3Title: "津山サンダーランス応援企画開催！",

        news4Date: "2024年4月30日",
        news4Title: "GW期間の列車増発について",

        news5Date: "2024年4月4日",
        news5Title: "銀新駅高架化工事のお知らせ",

        latestNews: "新着ニュース",
        routeMap: "駅の紹介",
        nishiyahataTimetable: "西八幡駅 時刻表",

        TransferToJRLine: "JR線　お乗り換え",
        ConnectionBusesDepartFromPlatform1: "連絡バスは1番乗り場",
        TransferToSubwayLine: "市営地下鉄線　お乗り換え",
        ExpressStopsOnGameDays: "試合開催日は快速停車",

        RedIndicatesExpressTrains: "赤色は快速列車です。",
        Time: "時刻",
        Weekdays: "平日",
        Holidays: "土・休日",
        DontPush: "押すな！",

        Report: "報告する！",
        FinishReport: "報告完了！",
      },
    },
  },
});

export default i18n;
