import styled, { css } from "styled-components";
import { TopicsItem } from "./TopicItem";
import MapIcon from "@mui/icons-material/MapTwoTone";
import ScheduleIcon from "@mui/icons-material/ScheduleTwoTone";
import TrainIcon from "@mui/icons-material/TrainTwoTone";
import ChatbotIcon from "@mui/icons-material/SmartToyTwoTone";

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const TopicsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const iconStyles = css`
  min-width: 50px;
  min-height: 50px;
`;

const StyledMapIcon = styled(MapIcon)`
  ${iconStyles}
`;
const StyledScheduleIcon = styled(ScheduleIcon)`
  ${iconStyles}
`;
const StyledTrainIcon = styled(TrainIcon)`
  ${iconStyles}
`;
const StyledChatbotIcon = styled(ChatbotIcon)`
  ${iconStyles}
`;

type topic = {
  icon: ReactNode;
  title: string;
  content: string;
};
const topicList = [
  { icon: <StyledMapIcon />, title: "RouteMap", content: "内容1" },
  { icon: <StyledScheduleIcon />, title: "Timetable", content: "内容2" },
  { icon: <StyledTrainIcon />, title: "ServiceStatus", content: "内容3" },
  { icon: <StyledChatbotIcon />, title: "Chatbot", content: "内容4" },
];

export const Topics = () => {
  const {t} = useTranslation();
  return (
    <TopicsStyle>
      {topicList.map((topic: topic) => (
        <TopicsItem
          key={topic.title}
          topicName={t(topic.title)}
          topicDetail={topic.content}
        >
          {topic.icon}
        </TopicsItem>
      ))}
    </TopicsStyle>
  );
};
