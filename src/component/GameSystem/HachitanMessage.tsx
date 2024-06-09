import styled from "styled-components";
import { HachitanMiniIcon } from "./hachitanMiniIcon";

const MessageStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border: 2px solid #ad7bae;

`;

interface HachitanMiniIconProps {
    type: "Smile" | "Snicker" | "Cry";
  message: string;
}

export const HachitanMessage = ({ type,message }: HachitanMiniIconProps) => {
  return (
    <>
      <MessageStyle>
        <HachitanMiniIcon type={type} />
        <p>{message}</p>
      </MessageStyle>
    </>
  );
};
