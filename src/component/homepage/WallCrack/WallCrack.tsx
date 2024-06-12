import { Button } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const WallCrackDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const WallCrackImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 800px;
  max-width: 800px;
`;

const WallCrackStyle = styled.img`
  width: 100%;
`;
export const WallCrack = () => {
  const [buttonState, useButtonState] = useState(false);
  const { t } = useTranslation();
  return (
    <WallCrackDivStyle>
      <WallCrackImgContainer>
        {buttonState ? (
          <WallCrackStyle src={`${import.meta.env.BASE_URL}images/Crack.png`}/>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              useButtonState(true);
            }}
            sx={{
              width: "300px",
              height: "100px",
              fontSize: "40px",
              fontStyle: "bold",
            }}
          >
            {t("DontPush")}
          </Button>
        )}
      </WallCrackImgContainer>
    </WallCrackDivStyle>
  );
};
