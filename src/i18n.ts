import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getBrowserLanguage = () => {
  return navigator.language || "ja";
};

i18n
  .use(initReactI18next)
  .init({
    lng: getBrowserLanguage(),
    fallbackLng: 'ja',
    resources: {
      en: {
        translation: {
          "ChatbotPRTitle": "Introducing the Chat AI \"Hachitan\"!",
          "ChatbotPRDetail": "The Yawata Railway website now features an AI chatbot! Feel free to ask anything, from departure times to transfer information!",
          "TryChatbot" : "Try it",

          "RouteMap" : "Route Map",
          "Timetable" : "Timetable",
          "ServiceStatus" : "Service Status",
          "Chatbot" : "Chatbot",

          "ShinYahata" : "Shin-Yahata",
          "YahataChuoKoko":"Yahata Center High School",
          "Ohgakubo":"Ohgakubo",
          "YahataColorfulPark":"Yahata Colorful Park",
          "Ginshin":"Ginshin",
          "TsuyamaStadium":"Tsuyama Stadium",
          "Tsuyama":"Tsuyama",
          "Airport":"International Airport",
        }
      },
      ja: {
        translation: {
          "ChatbotPRTitle": "チャットAI「ハチタン」デビュー！",
          "ChatbotPRDetail": "八幡鉄道ホームページにAIチャットボットが登場！ 発車時刻や乗り換え案内など、なんでも聞いてね！",
          "TryChatbot" : "使ってみる",
          
          "RouteMap" : "路線図",
          "Timetable" : "時刻表",
          "ServiceStatus" : "運行状況",
          "Chatbot" : "ハチタン",

          "ShinYahata" : "新八幡",
          "YahataChuoKoko":"八幡中央高校",
          "Ohgakubo":"大ヶ久保",
          "YahataColorfulPark":"八幡カラフルパーク",
          "Ginshin":"銀新",
          "TsuyamaStadium":"津山スタジアム",
          "Tsuyama":"津山",
          "Airport":"国際空港",
        } 

      }
    }
  });

export default i18n;
