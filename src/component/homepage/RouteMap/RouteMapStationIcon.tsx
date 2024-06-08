import styled, { css } from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import StadiumIcon from "@mui/icons-material/Stadium";
import AttractionsIcon from "@mui/icons-material/Attractions";
import FlightIcon from "@mui/icons-material/Flight";
import FestivalIcon from "@mui/icons-material/Festival";
import ForestIcon from "@mui/icons-material/Forest";
import BusinessIcon from "@mui/icons-material/Business";
import CastleIcon from "@mui/icons-material/Castle";


const StationIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  min-height: 60px;
  background-color: var(--primary-color);
  border-radius: 50%;
  color: white;
  font-weight: bold;

`;

const iconStyles = css`
    min-width: 40px;
    min-height: 40px;
`;

const StyledBusinessIcon = styled(BusinessIcon)`${iconStyles}`;
const StyledSchoolIcon = styled(SchoolIcon)`${iconStyles}`;
const StyledStadiumIcon = styled(StadiumIcon)`${iconStyles}`;
const StyledAttractionsIcon = styled(AttractionsIcon)`${iconStyles}`;
const StyledFlightIcon = styled(FlightIcon)`${iconStyles}`;
const StyledFestivalIcon = styled(FestivalIcon)`${iconStyles}`;
const StyledForestIcon = styled(ForestIcon)`${iconStyles}`;
const StyledCastleIcon = styled(CastleIcon)`${iconStyles}`;



const IconMap = {
    "NishiYahata": StyledBusinessIcon,
    "YahatadaiKoko": StyledSchoolIcon,
    "Ohgakubo": StyledForestIcon,
    "YahataColorfulPark": StyledAttractionsIcon,
    "Ginshin": StyledCastleIcon,
    "TsuyamaStadium": StyledStadiumIcon,
    "Tsuyama": StyledFestivalIcon,
    "Airport": StyledFlightIcon,
};

export type stations =
  "NishiYahata"
  | "YahatadaiKoko"
  | "Ohgakubo"
  | "YahataColorfulPark"
  | "Ginshin"
  | "TsuyamaStadium"
  | "Tsuyama"
  | "Airport"
  ;

interface StationIconProps {
  stationName: stations;
}

export const StationIcon = ({ stationName }: StationIconProps) => {
  const IconComponent = IconMap[stationName];

  return (
    <StationIconStyle className={stationName}>
      <IconComponent/>
    </StationIconStyle>
  );
};
