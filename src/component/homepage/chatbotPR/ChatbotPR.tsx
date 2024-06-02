import styled from "styled-components";
import { HachitanCircle } from "./hachitanCircle";
import { ChatbotPRMessage } from "./ChatbotPRMessage";

const stationPath = "./images/station.png";

const ChatbotPRStyle = styled.div`
  background-image: url(${stationPath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  text-align: center;
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const ChatbotPR = () => {
  return (
    <ChatbotPRStyle>
      <ChatbotPRMessage />
      <HachitanCircle />
    </ChatbotPRStyle>
  );
};
