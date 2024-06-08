import {  Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StatusDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const TrainStatus = () => {
  const nowTime = new Date();
  const {t} = useTranslation();
  
  const futureTime = new Date(nowTime);
  futureTime.setHours(nowTime.getHours() + 9);

  const formatDateTime = (date: Date): string => {
    const month = date.getMonth() + 1; // 月は0から始まるため+1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return t('dateTimeFormat', { month, day, hours, minutes });
  };

  return (
    <StatusDivStyle>
      <Chip
        label={t('currentStatus', { dateTime: formatDateTime(nowTime) })}
        onClick={() => {}}
        onDelete={() => {}}
        deleteIcon={<DoneIcon style={{ color: "white" }} />}
        color="success"
      />
      <Chip
        label={t('currentStatus', { dateTime: formatDateTime(futureTime) })}
        onClick={() => {}}
        onDelete={() => {}}
        deleteIcon={<DoneIcon style={{ color: "white" }} />}
        color="success"
      />
    </StatusDivStyle>
  );
};

export default TrainStatus;
