import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";

const FooterStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;
const LogoStyle = styled.img`
  padding: 10px;
  text-align: center;
  width: 200px;
`;
const DivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 10px;
`;

export const PageHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <FooterStyle>
        <DivStyle></DivStyle>
        <LogoStyle src={t("Footer_PNG")}></LogoStyle>
        <DivStyle>
          <LanguageSwitcher></LanguageSwitcher>
        </DivStyle>
      </FooterStyle>
    </>
  );
};
