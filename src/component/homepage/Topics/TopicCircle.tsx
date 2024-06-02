import styled from "styled-components";


const CircleStyle = styled.div`
  max-width: 200px;
  max-height: 200px;
  min-width: 100px;
  min-height: 100px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

interface TopicCircleProps {
    children: React.ReactNode;
}

export const TopicCircle = ({children}:TopicCircleProps) => {
    return (
        <CircleStyle>
            {children}
        </CircleStyle>
    );
};
