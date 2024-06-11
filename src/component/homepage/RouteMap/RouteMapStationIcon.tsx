import styled, { css } from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import StadiumIcon from "@mui/icons-material/Stadium";
import AttractionsIcon from "@mui/icons-material/Attractions";
import FlightIcon from "@mui/icons-material/Flight";
import FestivalIcon from "@mui/icons-material/Festival";
import ForestIcon from "@mui/icons-material/Forest";
import BusinessIcon from "@mui/icons-material/Business";
import CastleIcon from "@mui/icons-material/Castle";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GrassIcon from '@mui/icons-material/Grass';
import TapasIcon from '@mui/icons-material/Tapas';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import SetMealIcon from '@mui/icons-material/SetMeal';
import DarkModeIcon from '@mui/icons-material/DarkMode';


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
const StyledRestaurantIcon = styled(RestaurantIcon)`${iconStyles}`;
const StyledGrassIcon = styled(GrassIcon)`${iconStyles}`;
const StyledTapasIcon = styled(TapasIcon)`${iconStyles}`;
const StyledKebabDiningIcon = styled(KebabDiningIcon)`${iconStyles}`;
const StyledLocalPizzaIcon = styled(LocalPizzaIcon)`${iconStyles}`;
const StyledTakeoutDiningIcon = styled(TakeoutDiningIcon)`${iconStyles}`;
const StyledSetMealIcon = styled(SetMealIcon)`${iconStyles}`;
const StyledRiceBowlIcon = styled(RiceBowlIcon)`${iconStyles}`;
const StyledDarkModeIcon = styled(DarkModeIcon)`${iconStyles}`;



const IconMap = {
    "NishiYahata": StyledBusinessIcon,
    "YahatadaiKoko": StyledSchoolIcon,
    "Ohgakubo": StyledForestIcon,
    "YahataColorfulPark": StyledAttractionsIcon,
    "Ginshin": StyledCastleIcon,
    "TsuyamaStadium": StyledStadiumIcon,
    "Tsuyama": StyledFestivalIcon,
    "Airport": StyledFlightIcon,
    "VermontCurry": StyledRestaurantIcon,
    "Potato": StyledGrassIcon,
    "Onion": StyledTapasIcon,
    "Carrot": StyledKebabDiningIcon,
    "SweetCorn": StyledLocalPizzaIcon,
    "Pork": StyledTakeoutDiningIcon,
    "Fukujinzuke":  StyledSetMealIcon,
    "Rice": StyledRiceBowlIcon,
    "Kisaragi": StyledDarkModeIcon,
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
  | "VermontCurry"
  | "Potato"
  | "Onion"
  | "Carrot"
  | "SweetCorn"
  | "Pork"
  | "Fukujinzuke"
  | "Rice"
  | "Kisaragi"
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
