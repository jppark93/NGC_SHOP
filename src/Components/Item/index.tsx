import styled from "styled-components";
import React, { useState } from "react";
import countUpBtn from "../../Images/countup.png";
import countDownBtn from "../../Images/countdown.png";
import deleteBtn from "../../Images/closeBtn.png";
/* type Linked = {
  total: number;
  outerSize: string;
  onClick: (total: number) => void;
}; */

const Item = (props: any) => {
  console.log(props);
  const [count, setCount] = useState<number>(props.ea);
  const [price, setPrice] = useState<number>(props.ea * props.price);
  const countUp = () => {
    props.changeEA(props.outerSize, count + 1);
    setCount(count + 1);
    props.changeTotal(props.price);
    setPrice(price + props.price);
  };
  const countDown = () => {
    if (count > 1) {
      props.changeEA(props.outerSize, count - 1);
      setCount(count - 1);
      props.changeTotal(-1 * props.price);
      setPrice(price - props.price);
    }
  };
  return (
    <ItemBox>
      <Size>{props.outerSize}</Size>
      <CountBox>
        <Count>
          <input type="text" value={count.toString()} />
          <BtnBox>
            <button type="button" onClick={countUp}>
              <img src={countUpBtn} alt="up" />
            </button>
            <button
              type="button"
              onClick={countDown}
              style={{ borderTop: "border: 1px solid #ccc" }}
            >
              <img src={countDownBtn} alt="down" />
            </button>
          </BtnBox>
        </Count>
      </CountBox>
      <ChoicePrice>
        {price.toString()}
        <h1>원</h1>
      </ChoicePrice>
      <DeleteBox>
        <button type="button">
          <img src={deleteBtn} alt="delete" />
        </button>
      </DeleteBox>
    </ItemBox>
  );
};
const ItemBox = styled.tr`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  align-items: center;
  border-bottom: 1px solid #999;
`;
const Size = styled.td`
  display: flex;
  align-items: center;
  width: 330px;
  height: 100%;
  padding-left: 20px;
  font-size: 12px;
`;
const CountBox = styled.td`
  display: flex;
  align-items: center;
  width: 106px;
  height: 100%;
`;
const Count = styled.span`
  display: flex;
  justify-content: center;
  width: 99px;
  height: 34px;
  padding: 0 17px;
  input {
    position: relative;
    text-align: center;
    border: 1px solid #ccc;
    color: #3f3f3f;
    width: 43px;
    height: 100%;
  }
`;
const BtnBox = styled.span`
  width: 23px;
  height: 100%;
  button {
    position: relative;
    width: 100%;
    height: 17px;

    img {
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }
`;
const ChoicePrice = styled.td`
  display: flex;
  align-items: center;
  width: 80px;
  height: 60px;
  font-size: 14px;

  h1 {
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
    font-family: "Raleway", sans-serif;
  }
`;
const DeleteBox = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 60px;
  img {
    cursor: pointer;
  }
`;
export default Item;
