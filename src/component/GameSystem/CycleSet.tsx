import styled from "styled-components";
import { Homepage } from "../homepage/Homepage";
import Paper from "@mui/material/Paper";
import { PageX } from "./PageX";
import { MarginDiv, MarginDiv_Small } from "./MarginDiv";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useRef } from "react";

const CycleSetStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomepagePaper = styled(Paper)`
  align-items: center;
  padding: 10px;
  width: 95vw;
`;

interface CycleSetProps {
  setShownReportButton: (value: boolean) => void;
}

export const CycleSet = ({ setShownReportButton }: CycleSetProps) => {
  const count = useSelector((state: RootState) => state.gameState.count);
  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );

  const observerPageContainer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShownReportButton(true);
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  useEffect(() => {
    if (pageContainerRef.current) {
      observerPageContainer.observe(pageContainerRef.current);
    }

    return () => {
      if (pageContainerRef.current) {
        observerPageContainer.unobserve(pageContainerRef.current);
      }
    };
  }, [pageContainerRef]);

  return (
    <CycleSetStyle>
      <MarginDiv_Small/>
      <PageX num={count}></PageX>
      <MarginDiv_Small/>
      <HomepagePaper elevation={3} ref={pageContainerRef}>
        {currentTrick === "404" ? (
          <>
            <h1>404 Not Found</h1>
            <MarginDiv />
          </>
        ) : (
          <Homepage></Homepage>
        )}
      </HomepagePaper>
      <MarginDiv />
    </CycleSetStyle>
  );
};
