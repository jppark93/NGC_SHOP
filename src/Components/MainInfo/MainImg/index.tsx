import React from "react";
import styled from "styled-components";

const MainImg = () => {
  return (
    <MainInfoCp>
      <ImgBlock>
        <Img src="http://thenature.speedgabia.com/event/20ss_lookbook.gif" />
      </ImgBlock>
      <ExpBlock>
        <h1>20S/S LOOK BOOK</h1>
        <span>
          내셔널지오그래픽 어패럴의 새로운 얼굴이 된 모델 정혁과 함께한 20S/S
          컬렉션, 지금 바로 만나보세요!
        </span>
      </ExpBlock>
    </MainInfoCp>
  );
};
const MainInfoCp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 450px;
  height: 574px;
  border: 1px solid pink;
`;
const ImgBlock = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  border: 1px solid pink;
`;
const Img = styled.img`
  width: 450px;
  height: 450px;
  background-size: 100%;
`;
const ExpBlock = styled.div`
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
  color: #333333;
  h1 {
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
    font-weight: 800;
  }
  span {
    font-size: 15px;
    margin-left: 20px;
    margin-top: 15px;
    font-weight: bold;
  }
`;

export default MainImg;
