import styled from "styled-components";
import { stations } from "./RouteMapStationIcon";

const StationDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
`;
interface StationDetailIconProps {
  stationName: stations;
  stationDetail: string;
}

export const StationDetail = ({
  stationName,
  stationDetail,
}: StationDetailIconProps) => (
  <StationDetailStyle>
    <p>{stationDetail ? "　" : "" /*h1の高さをアイコンと合わせるための苦肉の策*/}</p>
    <h1>{stationName}</h1>
    <p>{stationDetail}</p>
  </StationDetailStyle>
);
