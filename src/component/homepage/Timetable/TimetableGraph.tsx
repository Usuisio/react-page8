import React from "react";
import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

const TimetableContainer = styled(Paper)`
  max-width: 800px;
  min-width: 370px;
  padding: 16px;
`;


const TimeGrid = styled(Grid)`
  background-color: #b3afdb;
  font-weight: bold;
  text-align: center;
  padding: 4px;
  &.Weekday{
  background-color: #d5d4de;
  }
  &.Holiday{
  background-color: #ff9990;
  }
  
  &.Time1{
  background-color: #d2d1f0;
  }
  
  &.Time2{
  background-color: #efeefc;
  }
   
`;

const DepartureGrid = styled(Grid)`
  text-align: start;
  padding: 4px;
  
  &.Train1{
  background-color: #f0eef3;
  }
  
  &.Train2{
  background-color: #f7f4f9;
  }
  &.Holiday1{
  background-color: #f1e4e5;
  }
  
  &.Holiday2{
  background-color: #f9f1f3;
  }
`;

export const TimetableGraph = () => {
  const data = [
    { type:'1', hour: "06", departures: ["02", "26", "48"] },
    { type:'2', hour: "07", departures: ["08", "26", "42", "54"] },
    { type:'1', hour: "08", departures: ["02", "12", "22", "36", "52"] },
    { type:'2', hour: "09", departures: ["06", "22", "30", "46"] },
    { type:'1', hour: "10", departures: ["00", "22", "30", "46"] },
    { type:'2', hour: "11", departures: ["00", "22", "41"] },
    { type:'1', hour: "12", departures: ["00", "22", "41"] },
    { type:'2', hour: "13", departures: ["00", "22", "41"] },
    { type:'1', hour: "14", departures: ["00", "22", "41"] },
    { type:'2', hour: "15", departures: ["00", "22", "41"] },
    { type:'1', hour: "16", departures: ["00", "08", "30", "38"] },
    { type:'2', hour: "17", departures: ["00", "08", "30", "38"] },
    { type:'1', hour: "18", departures: ["00", "08", "22", "40", "48"] },
    { type:'2', hour: "19", departures: ["00", "08", "22", "40", "48"] },
    { type:'1', hour: "20", departures: ["00", "08", "30", "38"] },
    { type:'2', hour: "21", departures: ["00", "08", "30", "38"] },
    { type:'1', hour: "22", departures: ["04", "08", "22", "42"] },
    { type:'2', hour: "23", departures: ["04", "26"] },
    // 他のデータを追加
  ];
  const { t } = useTranslation();

  return (
    <TimetableContainer>
      
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <TimeGrid>{t("Time")}</TimeGrid>
        </Grid>
        <Grid item xs={5}>
          <TimeGrid className="Weekday">{t("Weekdays")}</TimeGrid>
        </Grid>
        <Grid item xs={5}>
          <TimeGrid className="Holiday">{t("Holidays")}</TimeGrid>
        </Grid>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <Grid item xs={2}>
              <TimeGrid className={"Time"+row.type}>{row.hour}</TimeGrid>
            </Grid>
            <Grid item xs={5}>
              <DepartureGrid className={"Train"+row.type}>
                {row.departures.map((num) => {
                  return +num % 10 === 0 ? (
                    <span key={row.hour+num} style={{ color: "#EE5555" }}>{num}　</span>
                  ) : (
                    <span key={row.hour+num} >{num}　</span>
                  );
                })}
              </DepartureGrid>
            </Grid>
            <Grid item xs={5}>
              
            <DepartureGrid className={"Holiday"+row.type}>
                {row.departures.map((num) => {
                  return +num % 10 === 0 ? (
                    <span key={row.hour+num}  style={{ color: "#EE5555" }}>{num}　</span>
                  ) : (
                    <span key={row.hour+num} >{num}　</span>
                  );
                })}
              </DepartureGrid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <p style={{ textAlign: "left", color: "#EE5555" }}>{t("RedIndicatesExpressTrains")}</p>
    </TimetableContainer>
  );
};
