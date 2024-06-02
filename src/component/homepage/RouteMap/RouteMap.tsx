import styled from "styled-components";
import { Box } from "@mui/material";
import { RouteMapGraph } from "./RouteMapGraph";

const RouteContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RouteMap = () => (
  <RouteContainer>
    <h1>駅の紹介</h1>
    <RouteMapGraph />
  </RouteContainer>
);
