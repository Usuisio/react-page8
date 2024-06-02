import styled from "styled-components";
import { HachitanImage } from "./HachitanImage";

const CircleStyle = styled.div`
  max-width: 600px;
  max-height: 600px;
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    10px,
    #465298 10px,
    20px
  );
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 30px solid var(--primary-color, lightcoral);
  
  overflow: hidden;
`;

export const HachitanCircle = () => (
  <CircleStyle>
    <HachitanImage />
  </CircleStyle>
);
