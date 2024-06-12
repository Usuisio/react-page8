import styled from "styled-components";
import "../../../App.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface HolidayPRProps {
  imagepath: string;
}

const HolidayPRStyle = styled.div<HolidayPRProps>`
flex: 1;
border: 5px solid white;
  background-image: url(${props => props.imagepath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  text-align: center;
  width: 100%;
  min-height: 500px;

  @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
    height: 100%;
}
`;

const HolidayPROverlayStyle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;


`;

const HeadlineStyle = styled.p`
    font-size: 2rem;
    font-family:'Noto Serif JP', sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 3px black;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 60px;
    `;
const PStyle = styled.p`
    font-size: 1rem;
    font-family:'Noto Serif JP', sans-serif;
    text-shadow: 1px 1px 2px black;
    
    padding-top: 20px;
    padding-left: 80px;
    padding-right: 80px;
    `;


export const HolidayPR = () => {
    const { t } = useTranslation();
    const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick);
    const imagePath = 
    currentTrick === "画像全部ハチタン" ? "/yahata-railway/images/Hachitan_trim.png" 
    :currentTrick === "背景マゼンタ" ? "/yahata-railway/images/magenta.png" 
    : "/yahata-railway/images/sasayama.png";
  return (

    <HolidayPRStyle imagepath={imagePath}>
      <HolidayPROverlayStyle>
      {      currentTrick === "ガタンゴトン" ?
      <>
      <HeadlineStyle>{t("HolidayPRTitle_Gatangoton")}</HeadlineStyle>
      <PStyle>{t("HolidayPRDetail_Gatangoton")}</PStyle>
    </>
    :

        <>
        <HeadlineStyle>{t("HolidayPRTitle")}</HeadlineStyle>
        <PStyle>{t("HolidayPRDetail")}</PStyle>
      </>
      }
      </HolidayPROverlayStyle>
    </HolidayPRStyle>
  );
};
