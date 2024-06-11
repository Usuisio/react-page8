import styled from "styled-components";
import { Box } from "@mui/material";
import { TimetableGraph } from "./TimetableGraph";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

const TimetableContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Timetable = () => {
  const {t} = useTranslation();
  const currentTrick = useSelector((state: RootState) => state.gameState.currentTrick);
  
  return (
    
    <TimetableContainer>
    <h1>{currentTrick === "ページ8" ? t("lastHachitanMessage13"):t("nishiyahataTimetable")}</h1>
    <TimetableGraph />
  </TimetableContainer>
);
}
