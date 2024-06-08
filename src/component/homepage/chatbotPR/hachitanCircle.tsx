import styled from "styled-components";
import { HachitanImage } from "./HachitanImage";

const CircleStyle = styled.div`
  max-width: 600px;
  max-height: 600px;
  background: white;

  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 30px solid ${({theme})=>theme.colors.primary};
  
  overflow: hidden;

  
  @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border: 20px solid ${({theme})=>theme.colors.primary};
}
`;

export const HachitanCircle = () => {
  return (
  <>
  <CircleStyle>
    <HachitanImage/>
  </CircleStyle>
  </>
)};
