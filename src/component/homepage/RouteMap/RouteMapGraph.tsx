import styled from "styled-components";
import { Box } from "@mui/material";
import { Station } from "./RouteMapStation";

const Line = styled(Box)`
  width: 4px;
  height: 40px;
  background-color: #412323;
`;

const RouteContainer = styled(Box)`
  display: flex;
    flex-direction: column;
  align-items: center;
  background-color: #fcf4f4;
  border: 3px solid lightcoral;
  padding: 20px;
`;

export const RouteMapGraph = () => (
  <RouteContainer>
    <Station stationName="ShinYahata" stationDetail="Lorem方面　お乗り換え"/>
    <Line />
    <Station stationName="YahataChuoKoko" stationDetail=""/>
    <Line />
    <Station stationName="Ohgakubo" stationDetail=""/>
  </RouteContainer>
);
