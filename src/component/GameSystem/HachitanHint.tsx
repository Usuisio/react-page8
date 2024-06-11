import styled from "styled-components";
import { HachitanMiniIcon } from "./hachitanMiniIcon";
import { useState } from "react";

const HintDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

const HintStyleBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  padding: 4px;
  background-color: #a07da0;
`;

const HintStyleOver = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px, 4px, 4px, 4px;
  background-color: #f0ddf0;
`;

const HintStyleImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 4px, 4px, 4px, 4px;
`;

interface HachitanMiniIconProps {
  hint: string;
}

export const HachitanHint = ({ hint }: HachitanMiniIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultStyle = {
    transition: "opacity 200ms ease-in-out",
    opacity: isHovered ? 0 : 1,
  };

  const hoveredStyle = {
    transition: "opacity 200ms ease-in-out",
    opacity: isHovered ? 1 : 0,
  };

  return (
    <>
      <HintDivStyle>
        <h2>Hint: </h2>
        <HintStyleBase
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HintStyleOver>
            <HintStyleImage style={hoveredStyle} src={hint}></HintStyleImage>
          </HintStyleOver>
        </HintStyleBase>
      </HintDivStyle>
    </>
  );
};
