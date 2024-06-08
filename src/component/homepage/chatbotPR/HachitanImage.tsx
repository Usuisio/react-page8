import styled from "styled-components";

const HachitanImageStyle = styled.img`
  width: 100%;
  height: auto;
`;

export const HachitanImage = () => (
  // TODO:異変で解禁
  // <HachitanImageStyle src="/images/Hachitan_Background.png" alt="Illustration" />
  // :
  <HachitanImageStyle src="/images/Hachitan_trim.png" alt="Illustration" />
);
