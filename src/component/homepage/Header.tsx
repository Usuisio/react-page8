import styled from "styled-components";
import "./../../App.css";

const HeaderStyle = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;

  background-color: white;
  color: ${({theme})=>theme.colors.primary};
  padding: 10px;
  text-align: center;
  width: 100%;
`;


const LogoStyle = styled.img`
  padding: 10px;
  text-align: center;
  width: 300px;
`;


export const Header = () => {
  return (
    <HeaderStyle>
        <LogoStyle src = {"./images/Yahata_Logo.png"}></LogoStyle>
    </HeaderStyle>
  );
};
