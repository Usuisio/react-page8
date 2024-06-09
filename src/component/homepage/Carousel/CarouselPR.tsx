import { ChatbotPR } from "../chatbotPR/ChatbotPR";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { HolidayPR } from "../HolidayPR/HolidayPR";

const CarouselWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding:4px;
padding-top: 20px;
`;
const CustomSlider = styled(Slider)`
border: 5px solid White;
width:100%;
max-width: 90vw;
  .slick-dots.custom-dots li button:before {
    font-size: 16px;
  
  }

  .slick-dots.custom-dots li.slick-active button:before {
    color: #111111;
  }
`;

const StretchDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 700px;
  }
`;

export const CarouselPR = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "10px",

    dotsClass: "slick-dots custom-dots", // カスタムクラス名を追加
  };

  const steps = [
    {
      label: "Select campaign settings",
      description: () => <ChatbotPR />,
    },
    {
      label: "Create an ad group",
      description: () => <HolidayPR />,
    },
  ];

  return (
     <CarouselWrapper>
       <CustomSlider {...settings}>
        {steps.map((step) => (
          <StretchDiv key={step.label}>{step.description()}</StretchDiv>
        ))}
       </CustomSlider>
     </CarouselWrapper>
  );
};
