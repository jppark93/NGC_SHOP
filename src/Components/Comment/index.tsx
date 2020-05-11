import React, { useState, Props } from "react";
import styled, { css } from "styled-components";
import deleteBtn from "../../Images/reviewDel.png";
const Comment = (props: any) => {
  const [like, setLike] = useState<number>(0);
  const newDate = new Date();
  const likeBtn = () => {
    if (like === 0) {
      return setLike(1);
    } else if (like === 1) {
      return setLike(0);
    }
  };
  const DeleteBtn = () => {};
  return (
    <BuyerReview>
      <DayName>
        <span>
          {newDate.getFullYear()}.{newDate.getMonth() + 1}.{newDate.getDate()}
        </span>
        <span>로그인닉네임</span>
      </DayName>
      <TextBox>
        <TbTop>
          <Size>
            <dt>SIZE</dt>
            <dd>{props.size}</dd>
          </Size>
        </TbTop>
        <TbMid>{props.ment}</TbMid>
        <TbBot>
          <span>추천하기&nbsp;&nbsp;:&nbsp;{like}</span>
          <button className="likeBtn" type="button" onClick={likeBtn}>
            추천하기
          </button>
          <DeleteDiv>
            <button type="button" key={props.key} onClick={DeleteBtn}>
              <img src={deleteBtn} />
            </button>
          </DeleteDiv>
        </TbBot>
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #f8f8f8;
  padding: 20px;
`;
const Size = styled.dl`
  display: flex;
  width: 100%;
  height: 31px;
  font-size: 12px;
  dt {
    display: flex;
    align-items: center;
    width: 108px;
    height: 100%;
  }
  dd {
    display: flex;
    align-items: center;
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
    font-family: "Raleway", sans-serif;
  }
`;
const TbMid = styled.div`
  width: 1000px;
  height: 50px;
  font-size: 12px;
  margin: 15px 0 15px 0;
`;
const TbBot = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 40px;
  span {
    font-size: 12px;
    color: #fa2828;
    margin-right: 20px;
  }
  .likeBtn {
    width: 61px;
    height: 21px;
    background-color: #fa2828;
    color: white;
    font-size: 11px;
  }
`;
const DeleteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #fcfcfc;
    img {
      width: 30px;
      height: 30px;
      background-size: 100%;
    }
  }
`;
export default Comment;
