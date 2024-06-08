import styled from "styled-components";
import { Box } from "@mui/material";
import { RouteMapGraph } from "./RouteMapGraph";
import { useTranslation } from "react-i18next";

const RouteContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RouteMap = () => {
  const { t } = useTranslation();
  return (
  <RouteContainer>
    <h1>{t("routeMap")}</h1>
    <RouteMapGraph />
  </RouteContainer>
)
};
