import styled from "styled-components";

const FooterStyle = styled.div`
    background-color: ${({theme})=>theme.colors.primary};;
    color: white;
    padding: 10px;
    text-align: center;
    width:100%;
    `
const LogoStyle = styled.img`
  padding: 10px;
  text-align: center;
  width: 300px;
`;

export const Footer = () => {
    return (
        <FooterStyle>
        <LogoStyle src = {"./images/Footer_Title.png"}></LogoStyle>
        </FooterStyle>
    )
}
