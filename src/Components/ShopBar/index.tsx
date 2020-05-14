import React, { useState } from "react";
import styled, { css } from "styled-components";
import XBTN from "../../Images/X.png";
import { Z_BLOCK } from "zlib";
const ShopBar = (props: any) => {
  const [boolean, setBoolean] = useState<string>("false");
  const On = () => {
    setBoolean("true");
  };
  const Off = () => {
    setBoolean("false");
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
  const qksqhrans = () => {};
  return (
    <BarLi>
      {Btn()}
      <UL className={boolean}>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li
          style={
            props.four === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.four}
        </li>
        <li
          style={
            props.five === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.five}
        </li>
        <li
          style={
            props.six === undefined ? { display: "none" } : { display: "block" }
          }
        >
          {props.six}
        </li>
        <li
          style={
            props.seven === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.seven}
        </li>
        <li
          style={
            props.eight === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.eight}
        </li>
        <li
          style={
            props.nine === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.nine}
        </li>
        <li
          style={
            props.ten === undefined ? { display: "none" } : { display: "block" }
          }
        >
          {props.ten}
        </li>
        <li
          style={
            props.eleven === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.eleven}
        </li>
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
    line-height: 2;
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
          width: 13px;
          height: 13px;
        `;
      }
    }}
  }
`;
export default ShopBar;
