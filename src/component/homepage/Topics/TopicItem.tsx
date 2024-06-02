import styled from "styled-components";
import { TopicCircle } from "./TopicCircle";
import { ReactNode } from "react";

const TopicsItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TopicNameStyle = styled.h1`
    color: var(--primary-color);
    `;
const TopicDetailStyle = styled.p`
    color: var(--secondary-color);
    `;

interface TopicsItemProps {
    children?: ReactNode;
    topicName: string;
    topicDetail: string;
    }
export const TopicsItem = ({children, topicName, topicDetail}:TopicsItemProps) => (
  <TopicsItemStyle>
    <TopicCircle>{children}</TopicCircle>
    <TopicNameStyle>{topicName}</TopicNameStyle>
    <TopicDetailStyle>{topicDetail}</TopicDetailStyle>
  </TopicsItemStyle>
);
