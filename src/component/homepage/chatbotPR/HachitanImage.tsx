import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store";

const HachitanImageStyle = styled.img`
  width: 100%;
  height: auto;
`;

export const HachitanImage = () => {
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  return (
    <>
      {currentTrick === "ハチタンが大きい" ? (
        <HachitanImageStyle
          src="/yahata-railway/images/Hachitan_Background.png"
          alt="Illustration"
        />
      ) : currentTrick === "ハチタンの顔が悪い" ? (
        <HachitanImageStyle
          src="/yahata-railway/images/Hachitan_Dark_trim.png"
          alt="Illustration"
        />
      ) :(
        <HachitanImageStyle
          src="/yahata-railway/images/Hachitan_trim.png"
          alt="Illustration"
        />
      )}
    </>
  );
};
