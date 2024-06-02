import styled, { css } from "styled-components";
import { TopicsItem } from "./TopicItem";
import MapIcon from "@mui/icons-material/MapTwoTone";
import ScheduleIcon from "@mui/icons-material/ScheduleTwoTone";
import TrainIcon from "@mui/icons-material/TrainTwoTone";

import { ReactNode } from "react";

const TopicsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const iconStyles = css`
    min-width: 50px;
    min-height: 50px;
`;

const StyledMapIcon = styled(MapIcon)`${iconStyles}`;
const StyledScheduleIcon = styled(ScheduleIcon)`${iconStyles}`;
const StyledTrainIcon = styled(TrainIcon)`${iconStyles}`;

type topic = {
    icon: ReactNode;
    title: string;
    content: string;
    };
const topicList = [
    {icon:<StyledMapIcon/>, title:"路線図",content:"内容1"},
    {icon:<StyledScheduleIcon/>, title:"時刻表",content:"内容2"},
    {icon:<StyledTrainIcon/>, title:"運行状況",content:"内容3"},
];



export const Topics = () => (
    console.log(topicList),
  <TopicsStyle>
    {topicList.map((topic:topic) => (
        <TopicsItem key = {topic.title} topicName={topic.title} topicDetail={topic.content}>
            {topic.icon}
        </TopicsItem>
    ))}
  </TopicsStyle>
);
