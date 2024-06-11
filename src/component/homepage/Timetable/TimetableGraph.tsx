import React from "react";
import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

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
  const data_correct = [
    { type:'1', hour: "06", departures_weekday: ["02", "26", "48"] ,            departures_holiday: ["02", "26", "44"] },
    { type:'2', hour: "07", departures_weekday: ["08", "26", "42", "54"],       departures_holiday: ["08", "26", "42", "54"] },
    { type:'1', hour: "08", departures_weekday: ["02", "12", "22", "36", "52"], departures_holiday: ["02", "16", "32", "46"] },
    { type:'2', hour: "09", departures_weekday: ["06", "22", "30", "46"],       departures_holiday: ["00", "22", "36", "48"] },
    { type:'1', hour: "10", departures_weekday: ["00", "22", "30", "46"],       departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "11", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "12", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "13", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "14", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "15", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "16", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },  
    { type:'2', hour: "17", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "18", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },      
    { type:'2', hour: "19", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "20", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'2', hour: "21", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "22", departures_weekday: ["04", "08", "22", "42"],       departures_holiday: ["04", "08", "22", "42"] },  
    { type:'2', hour: "23", departures_weekday: ["04", "26"] ,                  departures_holiday: ["04", "26"] },    
  ];          

  const data_61 = [
    { type:'1', hour: "06", departures_weekday: ["02", "26", "48"] ,            departures_holiday: ["02", "26", "44"] },
    { type:'2', hour: "07", departures_weekday: ["08", "26", "42", "54"],       departures_holiday: ["08", "26", "42", "54"] },
    { type:'1', hour: "08", departures_weekday: ["02", "12", "22", "36", "52"], departures_holiday: ["02", "16", "32", "46"] },
    { type:'2', hour: "09", departures_weekday: ["06", "22", "30", "46"],       departures_holiday: ["00", "22", "36", "48"] },
    { type:'1', hour: "10", departures_weekday: ["00", "22", "30", "46"],       departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "11", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "12", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "13", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "14", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "15", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "16", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },  
    { type:'2', hour: "17", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "18", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },      
    { type:'2', hour: "19", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "20", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'2', hour: "21", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "22", departures_weekday: ["04", "08", "22", "42"],       departures_holiday: ["04", "08", "22", "42"] },  
    { type:'2', hour: "23", departures_weekday: ["04", "26", "61", "75", "86", "99" , "103", "134"] ,          departures_holiday: ["04", "26"] },    
  ];          

  const data_random = [
    { type:'1', hour: "18", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },
    { type:'2', hour: "23", departures_weekday: ["04", "26"] ,                  departures_holiday: ["04", "26"] },    
    { type:'1', hour: "10", departures_weekday: ["00", "22", "30", "46"],       departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "15", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "08", departures_weekday: ["02", "12", "22", "36", "52"], departures_holiday: ["02", "16", "32", "46"] },
    { type:'2', hour: "11", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'1', hour: "22", departures_weekday: ["04", "08", "22", "42"],       departures_holiday: ["04", "08", "22", "42"] },  
    { type:'2', hour: "17", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "12", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "19", departures_weekday: ["00", "08", "22", "40", "48"], departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "14", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
    { type:'2', hour: "07", departures_weekday: ["08", "26", "42", "54"],       departures_holiday: ["08", "26", "42", "54"] },
    { type:'1', hour: "16", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },  
    { type:'2', hour: "21", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'1', hour: "06", departures_weekday: ["02", "26", "48"] ,            departures_holiday: ["02", "26", "44"] },
    { type:'2', hour: "09", departures_weekday: ["06", "22", "30", "46"],       departures_holiday: ["00", "22", "36", "48"] },
    { type:'1', hour: "20", departures_weekday: ["00", "08", "30", "38"],       departures_holiday: ["00", "08", "30", "38"] },
    { type:'2', hour: "13", departures_weekday: ["00", "22", "41"] ,            departures_holiday: ["00", "22", "41"] },
  ];          


  const currentTrick = useSelector( (state: RootState) => state.gameState.currentTrick);
  const { t } = useTranslation();

  const data = currentTrick === "23時61分発" ? data_61 : currentTrick === "時刻表の時刻がランダム" ? data_random : data_correct;

  const colorfulColorCodeDic: { [key: string]: string } = {
    "1": "#EE5555",
    "2": "#e47b3d",
    "3": "#bab82d",
    "4": "#5fca42",
    "5": "#2bab58",
    "6": "#3ab5d0",
    "7": "#3255bc",
    "8": "#5f2d9c",
    "9": "#d53cbe",
    "0": "#202020",
  };

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
              { currentTrick === "時刻表がカラフル" 
              ? (
                row.departures_weekday.map((num) => {
                  const a = +num;
                  const b = +row.hour;
                  const tempColor = colorfulColorCodeDic[((a+b) % 10).toString()];
                  return  (
                    <span key={row.hour+num}  style={{ color: tempColor}}>{num}　</span>
                  ) 
                })
              )
              :
              (
                row.departures_weekday.map((num) => {
                  return +num % 10 === 0 ? (
                    <span key={row.hour+num}  style={{ color: "#EE5555" }}>{num}　</span>
                  ) : (
                    <span key={row.hour+num} >{num}　</span>
                  );
                })
              )}
              </DepartureGrid>
            </Grid>
            <Grid item xs={5}>
              
            <DepartureGrid className={"Holiday"+row.type}>
              { currentTrick === "時刻表がカラフル" 
              ? (
                row.departures_holiday.map((num) => {
                  const a = +num;
                  const b = +row.hour;
                  const tempColor = colorfulColorCodeDic[((a+b) % 10).toString()];
                  return  (
                    <span key={row.hour+num}  style={{ color: tempColor}}>{num}　</span>
                  ) 
                })
              )
              :
              (
                row.departures_holiday.map((num) => {
                  return +num % 10 === 0 ? (
                    <span key={row.hour+num}  style={{ color: "#EE5555" }}>{num}　</span>
                  ) : (
                    <span key={row.hour+num} >{num}　</span>
                  );
                })
              )}
              </DepartureGrid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
              { currentTrick === "時刻表がカラフル" 
              ? (Object.entries(colorfulColorCodeDic).map(([key, value]) => (
                <p key={key} style={{ textAlign: "left", color: value }}>{t("TimetableIndicate" + key)}</p>
              ))
      
    )
    :
    (
      <p style={{ textAlign: "left", color: "#EE5555" }}>{
        currentTrick === "ページ8" ? t("lastHachitanMessage14"):t("RedIndicatesExpressTrains")
        }</p>
    )}
    </TimetableContainer>
  );
};
