import { useTranslation, Trans } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store";

const ChatbotPRMessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 50px;
  min-width: 240px;
`;

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${(props) => props.color || "white"};
  padding: 10px 20px;
  min-width: 200px;
  font-size: large;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_hover};
  }
`;

const RainbowButton = styled.button`
  background: linear-gradient(
    90deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #9400d3
  );
  color: white;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 10px 20px;
  min-width: 200px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 1);

  &:hover {
    background: linear-gradient(
      90deg,
      #9400d3,
      #4b0082,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff7f00,
      #ff0000
    );
    border-color: #ffffff;
  }

`;

export const ChatbotPRMessage = () => {
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  const { t } = useTranslation();
  return (
    <ChatbotPRMessageStyle>
      <h1>{t("ChatbotPRTitle")}</h1>
      <br />
      <Trans i18nKey="ChatbotPRDetail">
        Welcome to our application.
        <br />
        We hope you have a great experience!
      </Trans>
      <br />
      <br />
      {currentTrick === "ゲーミングボタン" ? (
        <RainbowButton>{t("TryChatbot")}</RainbowButton>
      ) : (
        <CustomButton>{t("TryChatbot")}</CustomButton>
      )}
    </ChatbotPRMessageStyle>
  );
};
