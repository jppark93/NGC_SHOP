import React from "react";
import styled from "styled-components";
import MainImg from "./MainImg";
const MainInfo = () => {
  return (
    <MainInfoBlock>
      <ImgInfoBlock>
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
      </ImgInfoBlock>
      <ImgInfoBlock>
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
      </ImgInfoBlock>
      <ImgInfoBlock>
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
        <MainImg />
      </ImgInfoBlock>
    </MainInfoBlock>
  );
};
const MainInfoBlock = styled.div`
  display: flex;
  width: 1440px;
  border: 1px solid pink;
  margin-top: 80px;
`;
const ImgInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainInfo;
