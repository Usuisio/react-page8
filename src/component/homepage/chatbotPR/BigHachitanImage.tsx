import styled from "styled-components";

const HachitanOverImageStyle = styled.img`
  z-index: 100;
  position: absolute;
  top: -200px;
  right: -100px;
  max-width: 1200px;
  max-height:1200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const BigHachitanImage = () => (
  <HachitanOverImageStyle src="$(import.meta.env.BASE_URL}images/Hachitan_Only.png" alt="Illustration" />
);
