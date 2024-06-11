import { Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect, useRef, useState } from "react";

const StatusDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TrainStatus = () => {
  const nowTime = new Date();
  const { t } = useTranslation();
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );

  const futureTime = new Date(nowTime);
  futureTime.setHours(nowTime.getHours() + 9);

  const formatDateTime = (date: Date): string => {
    const month = date.getMonth() + 1; // 月は0から始まるため+1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return t("dateTimeFormat", { month, day, hours, minutes });
  };

  const [isSticky, setIsSticky] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (currentTrick === "運行状況がついてくる") {
        if (targetRef.current) {
          const scrollTop = window.scrollY;
          const stickyThreshold = 1000;
          const rect = targetRef.current.getBoundingClientRect();
          setIsSticky(rect.top <= 0 && scrollTop > stickyThreshold);
        }
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentTrick]);

  const stickyStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000, // 他の要素の上に表示
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // 影をつけて見やすく
  };

  return (
    <StatusDivStyle ref={targetRef} style={isSticky ? stickyStyle : {}}>
      {currentTrick === "運行情報の現在時刻が12月34日" ? (
        <Chip
          label={t("currentStatus", { dateTime: t("date12345678") })}
          onClick={() => {}}
          onDelete={() => {}}
          deleteIcon={<DoneIcon style={{ color: "white" }} />}
          color="success"
        />
      ) : (
        <Chip
          label={
            currentTrick === "ページ8" ? t("lastHachitanMessage1"):
            currentTrick === "でんしゃたくさんうごいてます" ? t("ManyTrainMoving")
            :t("currentStatus", { dateTime: formatDateTime(nowTime) })}
          onClick={() => {}}
          onDelete={() => {}}
          deleteIcon={<DoneIcon style={{ color: "white" }} />}
          color="success"
        />
      )}
    </StatusDivStyle>
  );
};

export default TrainStatus;
