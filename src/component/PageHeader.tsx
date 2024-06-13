import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";

const HeaderStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
const LogoStyle = styled.img`
  padding: 10px;
  text-align: center;
  width: 200px;
`;
const LangChangerDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 10px;
`;
const DivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;


export const PageHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderStyle>
        <LogoStyle src={t("Footer_PNG")}></LogoStyle>
      </HeaderStyle>
        <DivStyle>
          <LangChangerDivStyle>

          <LanguageSwitcher></LanguageSwitcher>
          </LangChangerDivStyle>
        </DivStyle>
    </>
  );
};
