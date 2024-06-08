import styled from "styled-components";
import { Box } from "@mui/material";
import { TimetableGraph } from "./TimetableGraph";
import { useTranslation } from "react-i18next";

const TimetableContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Timetable = () => {
  const {t} = useTranslation();
  
  return (
    
    <TimetableContainer>
    <h1>{t("nishiyahataTimetable")}</h1>
    <TimetableGraph />
  </TimetableContainer>
);
}
