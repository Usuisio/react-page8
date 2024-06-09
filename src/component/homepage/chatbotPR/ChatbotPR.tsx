import styled from "styled-components";
import { HachitanCircle } from "./hachitanCircle";
import { ChatbotPRMessage } from "./ChatbotPRMessage";
import "../../../App.css";

const stationPath = "./images/station.png";

const ChatbotPRStyle = styled.div`
  flex: 1;
  border: 5px solid white;
  background-image: url(${stationPath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  text-align: center;
  width: 100%;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 100%;
  }
`;

const ChatbotPROverlayStyle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;


export const ChatbotPR = () => {
  return (
      <ChatbotPRStyle>
        <ChatbotPROverlayStyle>
          <ChatbotPRMessage />
          <HachitanCircle />
        </ChatbotPROverlayStyle>
      </ChatbotPRStyle>
  );
};
