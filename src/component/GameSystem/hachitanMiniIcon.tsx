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
  const base_url = import.meta.env.BASE_URL;
  return (
    <>
      <CircleStyle>
        {type === "Smile" ? (
          <HachitanImageStyle src={base_url + "images/HachitanIconSmile.png" }/>
        ) : type === "Snicker" ? (
          <HachitanImageStyle src={base_url + "images/HachitanIconSnicker.png"} />
        ) : (
          <HachitanImageStyle src={base_url + "images/HachitanIconCry.png"} />
        )}
      </CircleStyle>
    </>
  );
};
