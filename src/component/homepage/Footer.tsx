import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const FooterStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
`;
const LogoStyle = styled.img`
  padding: 10px;
  text-align: center;
  width: 300px;
`;

export const Footer = () => {
  const { t } = useTranslation();
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  return (
    <>
      <FooterStyle>
        <LogoStyle
          src={
            currentTrick === "チーターよりはやい！"
              ? t("Footer_Cheetah_PNG")
              : currentTrick === "画像全部ハチタン"
              ? "$(import.meta.env.BASE_URL}images/Hachitan_Only.png"
              : t("Footer_PNG")
          }
        ></LogoStyle>
      </FooterStyle>
    </>
  );
};
