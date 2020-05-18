import React, { useState } from "react";
import styled from "styled-components";

const CartItem = (props: any) => {
  return (
    <ItemBox>
      <td className="borderTB" style={{ width: "38px" }}>
        <CheckBox>
          <input type="checkbox" />
          <span className="checkmark" />
        </CheckBox>
      </td>
      <td className="borderTB" style={{ width: "525px" }}>
        <OptionInfo>
          <span>
            <img src={props.info.img} />
          </span>
          <div className="pick">
            <span>{props.info.name}</span>
            <span>SIZE: {props.info.size}</span>
          </div>
        </OptionInfo>
      </td>
      <td
        className="border1"
        style={{
          width: "121px",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        {props.info.ea}개
      </td>
      <td
        className="border"
        style={{
          width: "121px",
        }}
      >
        {props.info.price}원
      </td>
      <td
        className="border"
        style={{
          width: "156px",
        }}
      ></td>
      <td
        className="border"
        style={{
          width: "240px",
        }}
      >
        {props.info.ea * props.info.price}원
      </td>
    </ItemBox>
  );
};
const ItemBox = styled.tr`
  display: flex;
  width: 100%;
  height: 102px;

  td {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .borderTB {
    border-bottom: 1px solid #e6e6e6;
  }
  .border {
    border: 1px solid #e6e6e6;
    border-left: none;
    border-top: none;
  }
  .border1 {
    border: 1px solid #e6e6e6;
    border-top: none;
  }
`;
const OptionInfo = styled.div`
  display: flex;
  margin-top: 20px;
  width: 95%;
  height: 59px;
  span {
    width: 52px;
    height: 59px;
    img {
      width: 42px;
      height: 42px;
    }
  }
  .pick {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    span {
      width: 453px;
      height: 18px;
      font-size: 12px;
      :nth-child(2) {
        color: #a9a9a9;
        font-size: 11px;
        padding: 3px 0px;
      }
    }
  }
`;
const CheckBox = styled.label`
  display: flex;
  position: relative;
  padding-left: 20px;
  margin-bottom: 15px;
  margin-left: 5px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: white;
    border: 1px solid #111;
  }
  &:hover input ~ .checkmark {
    background-color: white;
  }
  input:checked ~ .checkmark {
    background-color: white;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 3px;
    top: 0px;
    width: 5px;
    height: 8px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export default CartItem;
