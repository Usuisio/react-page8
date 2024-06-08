import styled from "styled-components";
import { RouteMap } from "./RouteMap/RouteMap";
import { Topics } from "./Topics/Topics";
import { Timetable } from "./Timetable/Timetable";
import { NewsFeed } from "./NewsFeed/NewsFeed";
import TrainStatus from "./TrainStatus/TrainStatus";
import { CarouselPR } from "./Carousel/CarouselPR";
import { WallCrack } from "../WallCrack/WallCrack";
import { SNSIcons } from "./SNSIcons/SNSIcons";
import { BigHachitanImage } from "./chatbotPR/BigHachitanImage";

const ContentStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #eeeedd;
  text-align: center;
  width: 100%;
  gap: 20px;
`;

const GraphDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  padding: 10px;
  gap: 30px;
`;

export const Content = () => {
  return (
    <ContentStyle>
      {/* TODO:異変で解禁  <BigHachitanImage />　*/}
      <CarouselPR />
      <Topics />
      <TrainStatus />
      <NewsFeed />
      <GraphDivStyle>
        <RouteMap />
        <Timetable />
      </GraphDivStyle>
      <WallCrack />
      <SNSIcons />
    </ContentStyle>
  );
};
