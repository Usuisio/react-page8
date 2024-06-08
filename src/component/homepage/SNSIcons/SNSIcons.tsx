import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled, { css } from "styled-components";

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

const shareOnX = () => {
    const text = "地域とつながる、心を運ぶ。-八幡鉄道-";
    const url = 'https://usuisio.github.io/react-page8/'; 
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const text = "えっ、Twitterってこのアイコンじゃないの！？-八幡鉄道-";
    const url = 'https://usuisio.github.io/react-page8/'; 
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };
  const shareOnFacebook = () => {
    const url = 'https://usuisio.github.io/react-page8/'; // シェアしたいURL
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };
  
  const shareOnInstagram = () => {
    const url = 'https://usuisio.github.io/react-page8/'; // シェアしたいURL
    const shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

export const SNSIcons = () => {
  return (
    <FooterlIconsStyle>
      <StyledXIcon onClick={shareOnX}/>
      <StyledTwitterIcon  onClick={shareOnTwitter}/>
      <StyledFacebookIcon  onClick={shareOnFacebook}/>
      <StyledInstagramIcon  onClick={shareOnInstagram}/>
    </FooterlIconsStyle>
  );
};
