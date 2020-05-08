import React, { useState } from "react";
import styled, { css } from "styled-components";
import XBTN from "../../Images/X.png";
const ShopBar = (props: any) => {
  const [boolean, setBoolean] = useState<string>("false");
  const On = () => {
    setBoolean("true");
  };
  const Off = () => {
    setBoolean("false");
  };
  const func = () => {
    for (let i = 0; i < 11; i++) {
      if ($(`li`).length === 0) {
        return $("li").remove(); //태그삭제하고 싶어
      }
    }
  };
  const Btn = () => {
    if (boolean === "false") {
      return (
        <Span className={boolean} onClick={On}>
          {props.title} <img src={XBTN} />
        </Span>
      );
    } else if (boolean === "true") {
      return (
        <Span className={boolean} onClick={Off}>
          {props.title} <img src={XBTN} />
        </Span>
      );
    }
  };
  return (
    <BarLi>
      {Btn()}
      <UL key={props.key} className={boolean}>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
        <li>{props.five}</li>
        <li>{props.six}</li>
        <li>{props.seven}</li>
        <li>{props.eight}</li>
        <li>{props.nine}</li>
        <li>{props.ten}</li>
        <li>{props.eleven}</li>
      </UL>
    </BarLi>
  );
};
const BarLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
  font-size: 15px;
`;
const UL = styled.ul`
  ${(props) => {
    if (props.className === "false") {
      return css`
        display: none;
      `;
    } else {
      return css`
        display: block;
      `;
    }
  }}
  width: 100%;
  li {
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
    font-family: "Raleway", sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    color: #343434;
    font-size: 12px;
    padding-left: 15px;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
const Span = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 36.4px;
  padding-left: 12px;
  img {
    width: 12px;
    height: 12px;
    margin-left: auto;
    margin-right: 15px;
    ${(props) => {
      if (props.className === "true") {
        return css`
          transform: rotate(135deg);
        `;
      }
    }}
  }
`;
export default ShopBar;
