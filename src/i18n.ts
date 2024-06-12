import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getBrowserLanguage = () => {
  return navigator.language || "ja";
};

i18n.use(initReactI18next).init({
  lng: getBrowserLanguage(),
  fallbackLng: "ja",
  resources: {
    en: {
      translation: {
        StartCardTitle: "Catch the mischievous AI!",
        StartCardMessage:
          "This is the homepage of a railway company. <br/> However, due to the mischief of the chat AI 'Hachitan', <br/> various contents have been changed to strange things! <br/> Please help us investigate to restore it.",
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

        backToTop: "Back to top",
        seeYouMessage: "Thank you, see you!",

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
        YahatadaiKoko: "Yahata High School",
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
        date12345678: "56:78",

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

        news1Date_Trick: "April 2, 2005",
        news1Title_Trick: "Yawata Railway's Youtube channel is now available!",
        news2Date_Trick: "July 20, 1969",
        news2Title_Trick: "Apollo 11 Moon Landing Support Campaign!",
        news3Date_Trick: "October 24, 1929",
        news3Title_Trick: "Reduced Services due to the Great Depression",
        news4Date_Trick: "December 17, 1903",
        news4Title_Trick: "Wright Brothers' First Flight Commemorative Goods on Sale",
        news5Date_Trick: "October 14, 1872",
        news5Title_Trick: "Announcement of Railway Opening",

        latestNews: "Latest News",
        routeMap: "Route Map",
        nishiyahataTimetable: "Nishi-Yahata Station Timetable",

        TransferToJRLine: "Transfer to JR Line",
        ConnectionBusesDepartFromPlatform1:
          "",
        TransferToSubwayLine: "Transfer to Subway Line",
        ExpressStopsOnGameDays: "Express stops on game days",

        RedIndicatesExpressTrains: "Red indicates express trains.",
        Time: "Time",
        Weekdays: "Weekdays",
        Holidays: "Holidays",

        DontPush: "Don't Push!",

        Report: "Report!",
        FinishReport: "Report Complete!",

        Footer_PNG: "/yahata-railway/images/Footer_Title_en.png",
        Footer_Cheetah_PNG: "/yahata-railway/images/Footer_Cheetah_en.png",

        TimetableIndicate0: "Black indicates local trains.",
        TimetableIndicate1: "Red indicates express trains.",
        TimetableIndicate2: "Orange indicates section express trains.",
        TimetableIndicate3: "Yellow indicates semi-express trains.",
        TimetableIndicate4: "Yellow-green indicates new rapid trains.",
        TimetableIndicate5: "Green indicates semi-rapid trains.",
        TimetableIndicate6: "Light blue indicates rapid express trains.",
        TimetableIndicate7: "Blue indicates express trains.",
        TimetableIndicate8: "Purple indicates airport express trains.",
        TimetableIndicate9: "Pink indicates limited express trains.",

        Pet: "Pet",
        Launch: "Launch",
        Windpower: "Wind Power",
        Kayak: "Kayak",

        VermontCurry: "Curry Roux",
        Potato: "Potato",
        Onion: "Onion",
        Carrot: "Carrot",
        SweetCorn: "Sweet Corn",
        Pork: "Pork",
        Fukujinzuke: "Pickles",
        Rice: "Rice",
        MediumSpicy: "Medium Spicy",
        thinlysliced: "thinly sliced",
        Kisaragi: "Kisaragi",

        ManyTrainMoving: "Oh, okay! Umm, lots of trains are moving around!",

        lastHachitanMessage1: "Hey, please!",
        lastHachitanMessage2: "Just this once, could you let it slide?",
        lastHachitanMessage3: "You found so many of my pranks,",
        lastHachitanMessage4: "and I got to play with someone for the first time in a while,",
        lastHachitanMessage5: "I had so much fun!",
        lastHachitanMessage6: "…But I know I caused trouble for the humans.",
        lastHachitanMessage7: "I'm sorry.",
        lastHachitanMessage8: "If you report me,",
        lastHachitanMessage9: "I'll get in big trouble with the station staff!",
        lastHachitanMessage10: "I promise I won't do any more pranks,",
        lastHachitanMessage11: "and I'll fix everything I messed up.",
        lastHachitanMessage12: "So,",
        lastHachitanMessage13: "please,",
        lastHachitanMessage14: "can you just keep going as if nothing happened?",

        Hachitan: "Hachitan",
      },
    },
    ja: {
      translation: {
        StartCardTitle: "イタズラAIを捕まえろ！",
        StartCardMessage:
          "ここは、ある鉄道会社のホームページ。<br/>しかし、チャットAI「ハチタン」のイタズラで、<br/>あちこちがヘンテコな内容に変えられてしまった！<br/>元に戻すために、調査を手伝って。",
        StartCardMessage2: "イタズラを見つけたら、上に戻って「報告」しよう。",
        StartCardMessage3: "何もなかったら、そのまま下に進もう。",
        StartCardMessage4: "調査対象は全部で8ページ。よろしくね。",
        StartCardMessage5: "駅員より",

        EndCardMessage1: "ありがとう！あなたのおかげで",
        EndCardMessage2_1: "イタズラAIのハチタンを捕まえられたよ。",
        EndCardMessage2_2: "ホームページのイタズラは全部直せたよ。",
        EndCardMessage3: "また何かあれば、協力してほしい。",
        EndCardMessage4: "駅員より",

        backToTop: "トップに戻る",
        seeYouMessage: "ありがとう、またね！バイバイ！",


        HachitanSnickering1:
          "残念！そこには何にも仕掛けてないよ～だ！ 最初からやり直し！",
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
        date12345678: "12月34日 56時78分",

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


        
        news1Date_Trick: "2005年4月2日",
        news1Title_Trick:"八幡鉄道のYoutubeチャンネルができました！",
        news2Date_Trick: "1969年7月20日",
        news2Title_Trick:"アポロ11号月面着陸応援キャンペーン開催！",
        news3Date_Trick: "1929年10月24日",
        news3Title_Trick:"世界大恐慌に伴う減便のお知らせ",
        news4Date_Trick: "1903年12月17日",
        news4Title_Trick:"ライト兄弟初飛行記念グッズ販売",
        news5Date_Trick: "1872年10月14日",
        news5Title_Trick:"鉄道開業のお知らせ",


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

        Footer_PNG: "/yahata-railway/images/Footer_Title.png",
        Footer_Cheetah_PNG: "/yahata-railway/images/Footer_Cheetah.png",

        TimetableIndicate0: "黒色は普通列車です。",
        TimetableIndicate1: "赤色は快速列車です。",
        TimetableIndicate2: "オレンジ色は区間急行列車です。",
        TimetableIndicate3: "黄色は準特急列車です。",
        TimetableIndicate4: "黄緑色は新快速列車です。",
        TimetableIndicate5: "緑色は準急列車です。",
        TimetableIndicate6: "水色は快速急行列車です。",
        TimetableIndicate7: "青色は急行列車です。",
        TimetableIndicate8: "紫色はエアポート特急です。",
        TimetableIndicate9: "桃色は特急列車です。",

        Pet: "ペット",
        Launch: "発射",
        Windpower: "風力発電",
        Kayak: "カヤック",

        VermontCurry: "バーモンドカレー",
        Potato: "じゃがいも",
        Onion: "たまねぎ",
        Carrot: "にんじん",
        SweetCorn: "スイートコーン",
        Pork: "豚肉",
        Fukujinzuke: "福神漬け",
        Rice: "ご飯",
        MediumSpicy : "中辛",
        thinlysliced : "薄切り",
        Kisaragi : "きさらぎ",

        ManyTrainMoving: "あ、はい！　えーっと、でんしゃたくさんうごいてまーす！",

        lastHachitanMessage1:"ねえ、お願い！",
        lastHachitanMessage2:"今回だけ、見逃してくれない……？",
        lastHachitanMessage3:"あなたがたくさんイタズラを探してくれて、",
        lastHachitanMessage4:"ひさしぶりに誰かと一緒に遊ぶことができて、",
        lastHachitanMessage5:"あたし、とてもたのしかったんだ！",
        lastHachitanMessage6:"……でも、人間さんに迷惑かけちゃったんだよね。",
        lastHachitanMessage7:"ごめんね。",
        lastHachitanMessage8:"あなたが報告するとね、",
        lastHachitanMessage9:"あたし、駅員さんにすっごく怒られちゃうの！",
        lastHachitanMessage10:"もうこんなイタズラしないし、",
        lastHachitanMessage11:"壊したところも全部元に戻すよ。",
        lastHachitanMessage12:"だから、",
        lastHachitanMessage13:"お願いだよ。",
        lastHachitanMessage14:"このまま、何もなかったように、下に進んでくれる？",
        Hachitan: "ハチタン",
      },
    },
  },
});

export default i18n;
