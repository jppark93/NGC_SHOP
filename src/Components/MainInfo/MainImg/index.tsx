import React from "react";
import styled from "styled-components";

const MainImg = (props: any) => {
  return (
    <MainInfoCp>
      <ImgBlock>
        <Img src={props.image} />
      </ImgBlock>
      <ExpBlock>
        <h1>{props.title}</h1>
        <span>{props.contents}</span>
      </ExpBlock>
    </MainInfoCp>
  );
};
const MainInfoCp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 450px;

  border: 1px solid pink;
  margin-left: 23px;
`;
const ImgBlock = styled.div`
  position: relative;
  width: 450px;

  border: 1px solid pink;
  overflow: hidden;
`;
const Img = styled.img`
  width: 450px;
  height: 450px;
  background-size: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
  }
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
