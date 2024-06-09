import styled from "styled-components";

const MarginDivStyle = styled.div`
  height: 110vh;
  width: 100%;
  min-height: 500px;
`;


const MarginDivSmallStyle = styled.div`
  width: 100%;
  min-height: 100px;
`;

export const MarginDiv = () => {
  return <MarginDivStyle />;
};


export const MarginDiv_Small = () => {
    return <MarginDivSmallStyle />;
  };