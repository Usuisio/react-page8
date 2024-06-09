import styled from "styled-components";
import { RouteMap } from "./RouteMap/RouteMap";
import { Topics } from "./Topics/Topics";
import { Timetable } from "./Timetable/Timetable";
import { NewsFeed } from "./NewsFeed/NewsFeed";
import TrainStatus from "./TrainStatus/TrainStatus";
import { CarouselPR } from "./Carousel/CarouselPR";
import { WallCrack } from "./WallCrack/WallCrack";
import { SNSIcons } from "./SNSIcons/SNSIcons";
import { BigHachitanImage } from "./chatbotPR/BigHachitanImage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ContentStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8e8cd;

  text-align: center;
  width: 100%;
  gap: 20px;
`;

const GraphDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 30px;
`;

export const Content = () => {
  const currentTrick = useSelector((state: RootState) => state.gameState.currentTrick);
  return (
    <ContentStyle>
      {
        currentTrick === "ハチタンが大きい" && 
        <BigHachitanImage />
      }  
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
