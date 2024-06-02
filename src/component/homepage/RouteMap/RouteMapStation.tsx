import styled from "styled-components";
import { StationIcon, stations } from "./RouteMapStationIcon";
import { StationDetail } from "./RouteMapStationDetail";

const StationStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #662223;

  padding: 20px;
  min-width: 500px;
`;
interface StationIconProps {
    stationName: stations;
    stationDetail: string;
}

export const Station = ({ stationName,stationDetail }: StationIconProps) => (
  <StationStyle>
    <StationIcon stationName={stationName}></StationIcon>
    <StationDetail stationName={stationName} stationDetail={stationDetail}/>
  </StationStyle>
);
