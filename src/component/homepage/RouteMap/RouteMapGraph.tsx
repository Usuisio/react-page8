import styled from "styled-components";
import { Station, StationDeparture, StationTerminal } from "./RouteMapStation";
import {Paper} from "@mui/material";
import { useTranslation } from "react-i18next";

const CardStyle = styled(Paper)`
  display: flex;
    flex-direction: column;
  align-items: flex-start;
  background-color: #fcf4f4;
  padding: 20px;
  min-width: 360px;
`;

export const RouteMapGraph = () => {
  const { t } = useTranslation();
  return (
  <CardStyle>
    <StationDeparture stationName="NishiYahata" stationDetail={t("TransferToJRLine")}/>
    <Station stationName="YahatadaiKoko" stationDetail=""/>
    <Station stationName="Ohgakubo" stationDetail=""/>
    <Station stationName="YahataColorfulPark" stationDetail={t("ConnectionBusesDepartFromPlatform1")}/>
    <Station stationName="Ginshin" stationDetail={t("TransferToSubwayLine")}/>
    <Station stationName="TsuyamaStadium" stationDetail={t("ExpressStopsOnGameDays")}/>
    <Station stationName="Tsuyama" stationDetail=""/>
    <StationTerminal stationName="Airport" stationDetail=""/>
  </CardStyle>
)}
;
