import styled from "styled-components";
import "./../../App.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
  const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick);
  return (
    <HeaderStyle>
        <LogoStyle src = 
        {
          currentTrick === "YAYAYA" ? "$(import.meta.env.BASE_URL}images/Yayaya_Logo.png"
          : currentTrick === "画像全部ハチタン" ? "$(import.meta.env.BASE_URL}images/Hachitan_Only.png"
          :"$(import.meta.env.BASE_URL}images/Yahata_Logo.png"
          }></LogoStyle>
    </HeaderStyle>
  );
};
