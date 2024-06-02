import styled from "styled-components";
import { Box } from "@mui/material";
import { Station, StationDeparture, StationTerminal } from "./RouteMapStation";

const RouteContainer = styled(Box)`
  display: flex;
    flex-direction: column;
  align-items: flex-start;
  background-color: #fcf4f4;
  border: 3px solid lightcoral;
  padding: 20px;
`;

export const RouteMapGraph = () => (
  <RouteContainer>
    <StationDeparture stationName="ShinYahata" stationDetail="JR線・八幡市営地下鉄線　お乗り換え"/>
    <Station stationName="YahataChuoKoko" stationDetail=""/>
    <Station stationName="Ohgakubo" stationDetail=""/>
    <Station stationName="YahataColorfulPark" stationDetail="カラフルパーク行き連絡バスは1番乗り場から"/>
    <Station stationName="Ginshin" stationDetail="八幡市営地下鉄南北線　お乗り換え"/>
    <Station stationName="TsuyamaStadium" stationDetail=""/>
    <Station stationName="Tsuyama" stationDetail=""/>
    <StationTerminal stationName="Airport" stationDetail=""/>
  </RouteContainer>
);
