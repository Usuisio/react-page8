import styled from "styled-components";

const ChatbotPRMessageStyle = styled.div`

  display: flex;
  flex-direction: column;

  overflow: hidden;
  padding: 50px;
`;

export const ChatbotPRMessage = () => {
  return (
    <ChatbotPRMessageStyle>
    <h1>「ハチタン」デビュー！</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.      </p>
    </ChatbotPRMessageStyle>
  );
};
