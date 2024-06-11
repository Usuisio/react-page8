import styled from "styled-components";
import { Station, StationDeparture, StationTerminal } from "./RouteMapStation";
import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CardStyle = styled(Paper)`
  display: flex;
    flex-direction: column;
  align-items: flex-start;
  background-color: #fcf4f4;
  padding: 20px;
  min-width: 360px;
`;

export const RouteMapGraph = () => {
  const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick);
  const { t } = useTranslation();
  return (
  <CardStyle>
    <StationDeparture stationName={ currentTrick === "カレーの材料" ? "VermontCurry": "NishiYahata"} stationDetail={t(`${ currentTrick === "カレーの材料" ? "MediumSpicy": "TransferToJRLine"}`)}/>
    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "Potato":"YahatadaiKoko"} stationDetail=""/>}
    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "Onion":"Ohgakubo"} stationDetail=""/>}
    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "Carrot":"YahataColorfulPark"} stationDetail={t(`${ currentTrick === "カレーの材料" ? "": "ConnectionBusesDepartFromPlatform1"}`)}/>}
    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "SweetCorn":"Ginshin"} stationDetail={t(`${ currentTrick === "カレーの材料" ? "": "TransferToSubwayLine"}`)}/>}
    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "Pork":"TsuyamaStadium"} stationDetail={t(`${ currentTrick === "カレーの材料" ? "thinlysliced": "ExpressStopsOnGameDays"}`)}/>}

    { currentTrick === "きさらぎ駅" && <Station stationName="Kisaragi" stationDetail=""/>}

    { currentTrick !== "二駅" &&<Station stationName={ currentTrick === "カレーの材料" ? "Fukujinzuke":"Tsuyama"} stationDetail=""/>}
    <StationTerminal stationName={ currentTrick === "カレーの材料" ? "Rice":"Airport"} stationDetail=""/>
  </CardStyle>
)}
;
