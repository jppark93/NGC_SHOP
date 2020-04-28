import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <BuyerReview>
      <DayName>
        <span>2020.04.21</span>
        <span>로그인닉네임</span>
      </DayName>
      <TextBox>
        <TbTop></TbTop>
        <TbMid></TbMid>
        <TbBot></TbBot>
      </TextBox>
    </BuyerReview>
  );
};
const BuyerReview = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 235px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #fcfcfc;
  padding: 20px 0px;
`;
const DayName = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 193px;
  font-size: 12px;
  color: #111111;
  color: #787878;
  span {
    padding: 5px 20px 20px 20px;

    &:nth-child(2) {
      font-weight: bold;
    }
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  height: 193px;
  padding: 0px 20px 0px 20px;
`;
const TbTop = styled.div`
  width: 100%;
  height: 72px;
  background-color: #f8f8f8;
  padding: 20px;
`;
const TbMid = styled.div`
  width: 1000px;
  height: 50px;
  font-size: 12px;
`;
const TbBot = styled.div``;
export default Comment;
