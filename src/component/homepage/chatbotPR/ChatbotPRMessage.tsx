
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

export const ChatbotPRMessage = () => {
  const { t } = useTranslation();
  return (
    <ChatbotPRMessageStyle>
      <h1>{t("ChatbotPRTitle")}</h1>
      <p>{t("ChatbotPRDetail")} </p>
      <br/>
      <CustomButton>{t("TryChatbot")}</CustomButton>
    </ChatbotPRMessageStyle>
  );
};
