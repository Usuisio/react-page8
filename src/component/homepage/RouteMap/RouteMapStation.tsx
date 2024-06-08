import styled from "styled-components";
import { StationIcon, stations } from "./RouteMapStationIcon";
import { StationDetail } from "./RouteMapStationDetail";

const StationStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #662223;

  padding-left: 20px;
  width: 100%;
  min-width: 300px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Line = styled.div`
  width: 4px;
  height: 20px;
  
  background-color: #412323;
`;

const DummyLine = styled.div`
  width: 4px;
  height: 20px;
`;

interface StationIconProps {
  stationName: stations;
  stationDetail: string;
}

export const Station = ({ stationName, stationDetail }: StationIconProps) => (
  <>
    <StationStyle>
      <IconContainer>
        <Line></Line>
        <StationIcon stationName={stationName}></StationIcon>
        <Line></Line>
      </IconContainer>
      <StationDetail stationName={stationName} stationDetail={stationDetail} />
    </StationStyle>
  </>
);

export const StationDeparture = ({
  stationName,
  stationDetail,
}: StationIconProps) => (
  <>
    <StationStyle>
      <IconContainer>
        <DummyLine></DummyLine>
        <StationIcon stationName={stationName}></StationIcon>
        <Line></Line>
      </IconContainer>
      <StationDetail stationName={stationName} stationDetail={stationDetail} />
    </StationStyle>
  </>
);
export const StationTerminal = ({
  stationName,
  stationDetail,
}: StationIconProps) => (
  <>
    <StationStyle>
      <IconContainer>
        <Line></Line>
        <StationIcon stationName={stationName}></StationIcon>
        <DummyLine></DummyLine>
      </IconContainer>
      <StationDetail stationName={stationName} stationDetail={stationDetail} />
    </StationStyle>
  </>
);
