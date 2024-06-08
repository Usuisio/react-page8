import styled from "styled-components";
import { stations } from "./RouteMapStationIcon";
import { useTranslation } from "react-i18next";

const StationDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
}: StationDetailIconProps) => {
  const { t } = useTranslation();
  return (
    <StationDetailStyle>
      <span>
        {
          // stationDetail
          //   ? "　"
          //   : "" /*h1の高さをアイコンと合わせるための苦肉の策 詳細説明に何かが入っていれば全角スペースを入れることで三行分の扱いにしている*/
        }
      </span>
      <h3>{t(stationName)}</h3>
      <span>{t(stationDetail)}</span>
    </StationDetailStyle>
  );
};
