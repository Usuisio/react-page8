import styled from "styled-components";
import { StartCard, EndCard_Bottom } from "./GameSystem/StartCard";
import { useEffect, useRef, useState } from "react";
import { CycleSet } from "./GameSystem/CycleSet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { correct, mistake } from "../gameSlice";
import { ReportButton } from "./GameSystem/ReportButton";
import { t } from "i18next";
import { HachitanMessage } from "./GameSystem/HachitanMessage";
import { MarginDiv, MarginDiv_Small } from "./GameSystem/MarginDiv";

const GameLoopStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const CardCoordinator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
`;
export const GameLoop = () => {
  const [shownStartCard, setShownStartCard] = useState(true);
  const [shownReportButton, setShownReportButton] = useState(true);
  const [pushedReportButtonAtLatest, setPushedReportButtonAtLatest] =
    useState(false);

  const ReportedAction = () => {
    setShownReportButton(false);
    setPushedReportButtonAtLatest(true);
  };

  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  const count = useSelector((state: RootState) => state.gameState.count);

  //判定位置に入ったときの処理
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        shownStartCard && setShownStartCard(false);
        setPushedReportButtonAtLatest(false);
        console.log(currentTrick);
        //判定！
        dispatch(currentTrick === "" ? correct("") : mistake(""));
        pageContainerRef.current &&
          window.scrollTo(0, pageContainerRef.current.offsetTop);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [currentTrick]);

  const SnickeringHachitanIcons = () => {
    return (
      <>
        {!shownStartCard && count === 0 && pushedReportButtonAtLatest && (
          <HachitanMessage
            type={"Snicker"}
            message={t("HachitanSnickering1")}
          ></HachitanMessage>
        )}
  
        {!shownStartCard && count === 0 && !pushedReportButtonAtLatest && (
          <HachitanMessage
            type={"Snicker"}
            message={t("HachitanSnickering2")}
          ></HachitanMessage>
        )}
      </>
    );
  }


  return (
    <GameLoopStyle>
      {shownStartCard ? (
        <>
          <CardCoordinator>
            <StartCard />
          </CardCoordinator>
        </>
      ) : (
        <>
          <CardCoordinator>
            {shownReportButton ? (
              <ReportButton action={ReportedAction} />
            ) : (
              <h1>{t("FinishReport")}</h1>
            )}
          </CardCoordinator>
        </>
      )}

      <div ref={pageContainerRef}>
        <MarginDiv />
        {SnickeringHachitanIcons()}

        <CycleSet setShownReportButton={setShownReportButton} />
      </div>

      {count >= 8 ? (
        <CardCoordinator>
          <EndCard_Bottom />
        </CardCoordinator>
      ) : (
        <>
          <div
            ref={targetRef}
            style={{
              width: "100px",
              height: "100px",
            }}
          ></div>
        </>
      )}
    </GameLoopStyle>
  );
};
