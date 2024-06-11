import styled from "styled-components";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const HomepageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomepageStyle_rotate180 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: rotate(180deg);
`;

export const Homepage = () => {
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  return (
    <>
      {currentTrick === "180度回転" ? (
        <HomepageStyle_rotate180>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </HomepageStyle_rotate180>
      ) : (
        <HomepageStyle>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </HomepageStyle>
      )}
    </>
  );
};
