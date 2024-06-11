import styled from "styled-components";
import { Box } from "@mui/material";
import { RouteMapGraph } from "./RouteMapGraph";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const RouteContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RouteMap = () => {
  const currentTrick = useSelector((state: RootState) => state.gameState.currentTrick);
  const { t } = useTranslation();
  return (
  <RouteContainer>
    <h1>{currentTrick === "ページ8" ? t("lastHachitanMessage12"):t("routeMap")}</h1>
    <RouteMapGraph />
  </RouteContainer>
)
};
