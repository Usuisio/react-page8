import styled from "styled-components";

const HachitanImageStyle = styled.img`
  width: 100%;
  height: auto;
`;
const CircleStyle = styled.div`
  max-width: 80px;
  max-height:80px;
  background: white;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid ${({ theme }) => theme.colors.primary};

  overflow: hidden;
`;

interface HachitanMiniIconProps {
  type: "Smile" | "Snicker" | "Cry";
}

export const HachitanMiniIcon = ({ type }: HachitanMiniIconProps) => {
  return (
    <>
      <CircleStyle>
        {type === "Smile" ? (
          <HachitanImageStyle src="/yahata-railway/images/HachitanIconSmile.png" />
        ) : type === "Snicker" ? (
          <HachitanImageStyle src="/yahata-railway/images/HachitanIconSnicker.png" />
        ) : (
          <HachitanImageStyle src="/yahata-railway/images/HachitanIconCry.png" />
        )}
      </CircleStyle>
    </>
  );
};
