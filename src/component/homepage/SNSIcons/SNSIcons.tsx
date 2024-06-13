import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {useTranslation} from "react-i18next";

const FooterlIconsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 10px;
`;


const iconStyles = css`
    min-width: 32px;
    min-height: 32px;
`;

const StyledXIcon = styled(XIcon)`${iconStyles}`;
const StyledTwitterIcon = styled(TwitterIcon)`${iconStyles}`;
const StyledFacebookIcon = styled(FacebookIcon)`${iconStyles}`;
const StyledInstagramIcon = styled(InstagramIcon)`${iconStyles}`;



export const SNSIcons = () => {
  const currentTrick = useSelector((state: RootState) => state.gameState.currentTrick);
  const {t} = useTranslation();

  const shareOnX = () => {
    const text = t("Tweet1");
    const url = 'https://usuisio.github.io/yahata-railway/'; 
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const text = t("Tweet2");
    const url = 'https://usuisio.github.io/yahata-railway/'; 
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };
  const shareOnFacebook = () => {
    const url = 'https://usuisio.github.io/yahata-railway/'; // シェアしたいURL
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };
  
  const shareOnInstagram = () => {
    const url = 'https://usuisio.github.io/yahata-railway/'; // シェアしたいURL
    const shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };
  return (
    <FooterlIconsStyle>
      {currentTrick == "Twitterのロゴ" ? <StyledTwitterIcon  onClick={shareOnTwitter}/>: <StyledXIcon onClick={shareOnX}/>}
      
      <StyledFacebookIcon  onClick={shareOnFacebook}/>
      <StyledInstagramIcon  onClick={shareOnInstagram}/>
    </FooterlIconsStyle>
  );
};
