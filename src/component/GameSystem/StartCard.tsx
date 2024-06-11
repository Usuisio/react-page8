import { Button, Paper } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HachitanMiniIcon } from "./hachitanMiniIcon";
import { useState } from "react";

const StartCardStyle = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff4f4;
  padding: 50px;
  max-width: 560px;
  border: 6px dashed #e3b4cb;
`;

const LeftAlignedText = styled.div`
  text-align: left;
  flex: 1;
`;

const RightAlignedText = styled.div`
width: 100%;
flex-direction: row;
justify-content: flex-end;
  text-align: right;
  flex: 1;
`;

export const StartCard = () => {
  const { t } = useTranslation();
  return (
    <StartCardStyle>
      <LeftAlignedText>
        <Trans i18nKey="StartCardMessage">
          Welcome to our application.
          <br />
          We hope you have a great experience!
        </Trans>
        <h3 style={{ color: "#CC1155" }}>{t("StartCardMessage2")}</h3>
        <h3 style={{ color: "#1177CC" }}>{t("StartCardMessage3")}</h3>

        <p style={{ color: "#black" }}>{t("StartCardMessage4")}</p>
      </LeftAlignedText>
      <RightAlignedText>
        <p style={{ color: "#black" }}>{t("StartCardMessage5")}</p>
      </RightAlignedText>
      <ArrowDropDownIcon></ArrowDropDownIcon>
    </StartCardStyle>
  );
};

export const EndCard_Top = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    window.location.reload();
  };
  return (
    <StartCardStyle>
      <HachitanMiniIcon type="Cry"></HachitanMiniIcon>
      <LeftAlignedText>
        <p style={{ color: "#black" }}>{t("EndCardMessage1")}</p>
        <p style={{ color: "#black" }}>{t("EndCardMessage2_1")}</p>
        <p style={{ color: "#black" }}>{t("EndCardMessage3")}</p>
      </LeftAlignedText>
      <RightAlignedText>
        <p style={{ color: "#black" }}>{t("EndCardMessage4")}</p>
      </RightAlignedText>
      <Button onClick={handleClick} variant = "outlined">{t("backToTop")}</Button>
    </StartCardStyle>
  );
};

export const EndCard_Bottom = () => {
  const { t } = useTranslation();
  const [mes, setMes] = useState(t("backToTop"));
  const handleHover = () => {
    setMes(t("seeYouMessage"));
  }
  const handleClick = () => {
    if(mes === t("seeYouMessage")){

    window.scrollTo({ top: 0, behavior: 'auto' });
    window.location.reload();
    }
    else{
      setMes(t("seeYouMessage"));
    }
  };

  return (
    <StartCardStyle>
      <LeftAlignedText>
        <p style={{ color: "#black" }}>{t("EndCardMessage1")}</p>
        <p style={{ color: "#black" }}>{t("EndCardMessage2_2")}</p>
        <p style={{ color: "#black" }}>{t("EndCardMessage3")}</p>
      </LeftAlignedText>
      <RightAlignedText>
        <p style={{ color: "#black" }}>{t("EndCardMessage4")}</p>
      </RightAlignedText>
      <Button onClick={handleClick} onMouseEnter={handleHover} variant = "outlined">{mes}</Button>
    </StartCardStyle>
  );
};
