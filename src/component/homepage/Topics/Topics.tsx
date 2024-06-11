import styled, { css } from "styled-components";
import { TopicsItem } from "./TopicItem";
import MapIcon from "@mui/icons-material/MapTwoTone";
import ScheduleIcon from "@mui/icons-material/ScheduleTwoTone";
import TrainIcon from "@mui/icons-material/TrainTwoTone";
import ChatbotIcon from "@mui/icons-material/SmartToyTwoTone";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturingTwoTone';
import PetsTwoToneIcon from '@mui/icons-material/PetsTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import WindPowerTwoToneIcon from '@mui/icons-material/WindPowerTwoTone';
import KayakingTwoToneIcon from '@mui/icons-material/KayakingTwoTone';

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const TopicsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
const StyledPrecisionManufacturingIcon = styled(PrecisionManufacturingIcon)`
  ${iconStyles}
`;
const StyledPetsTwoToneIcon = styled(PetsTwoToneIcon)`
  ${iconStyles}
`;
const StyledRocketLaunchTwoToneIcon = styled(RocketLaunchTwoToneIcon)`
  ${iconStyles}
`;
const StyledWindPowerTwoToneIcon = styled(WindPowerTwoToneIcon)`
  ${iconStyles}
`;
const StyledKayakingTwoToneIcon = styled(KayakingTwoToneIcon)`
  ${iconStyles}
`;
type topic = {
  icon: ReactNode;
  title: string;
};

export const Topics = () => {
  const currentTrick = useSelector((state: RootState) => state.gameState.currentTrick );
  const {t} = useTranslation();

  const topicList_current = [
    { icon: <StyledMapIcon />, title: "RouteMap"},
    { icon: <StyledScheduleIcon />, title: "Timetable"},
    { icon: <StyledTrainIcon />, title: "ServiceStatus" },
    { icon: <StyledChatbotIcon />, title: "Chatbot"},
  ];
  const topicList_iconTrick = [
    { icon: <StyledMapIcon />, title: "RouteMap"},
    { icon: <StyledScheduleIcon />, title: "Timetable"},
    { icon: <StyledTrainIcon />, title: "ServiceStatus" },
    { icon: <StyledPrecisionManufacturingIcon />, title: "Chatbot"},
  ];

  const topicList_many = [
    { icon: <StyledMapIcon />, title: "RouteMap"},
    { icon: <StyledScheduleIcon />, title: "Timetable"},
    { icon: <StyledTrainIcon />, title: "ServiceStatus" },
    { icon: <StyledChatbotIcon />, title: "Chatbot"},
    { icon: <StyledPetsTwoToneIcon />, title: "Pet"},
    { icon: <StyledRocketLaunchTwoToneIcon />, title: "Launch"},
    { icon: <StyledWindPowerTwoToneIcon />, title: "Windpower"},
    { icon: <StyledKayakingTwoToneIcon />, title: "Kayak"},

  ]

  const topicList = 
  currentTrick === "トピックスの数が多い" ? topicList_many :
  currentTrick === "ハチタンのアイコンが変" ? topicList_iconTrick :
  topicList_current;

  return (
    <TopicsStyle>
      {topicList.map((topic: topic) => (
        <TopicsItem
          key={topic.title}
          topicName={t(topic.title)}
        >
          {topic.icon}
        </TopicsItem>
      ))}
    </TopicsStyle>
  );
};
