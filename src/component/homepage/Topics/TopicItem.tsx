import styled from "styled-components";
import { TopicCircle } from "./TopicCircle";
import { ReactNode } from "react";

const TopicsItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 160px;
`;

const TopicNameStyle = styled.h1`
    color: ${({theme})=>theme.colors.primary};
    `;
const TopicDetailStyle = styled.p`
    color: ${({theme})=>theme.colors.secondary};
    `;

interface TopicsItemProps {
    children?: ReactNode;
    topicName: string;
    }
export const TopicsItem = ({children, topicName}:TopicsItemProps) => (
  <TopicsItemStyle>
    <TopicCircle>{children}</TopicCircle>
    <TopicNameStyle>{topicName}</TopicNameStyle>
  </TopicsItemStyle>
);
