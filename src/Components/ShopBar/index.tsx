import React, { useState } from "react";
import styled, { css } from "styled-components";
import XBTN from "../../Images/X.png";
import { Z_BLOCK } from "zlib";
const ShopBar = (props: any) => {
  const [bool, setBool] = useState<boolean>(false);
  const On = () => {
    setBool(true);
  };
  const Off = () => {
    setBool(false);
  };

  const Btn = () => {
    if (bool === false) {
      return (
        <Span onClick={On}>
          {props.info.title} <img src={XBTN} />
        </Span>
      );
    } else {
      return (
        <Span onClick={Off}>
          {props.info.title}{" "}
          <img
            style={{
              transform: "rotate(135deg)",
              width: "13px",
              height: "13px",
            }}
            src={XBTN}
          />
        </Span>
      );
    }
  };

  return (
    <BarLi>
      {Btn()}
      <UL style={bool ? { display: "block" } : { display: "none" }}>
        <li>{props.info.one}</li>
        <li>{props.info.two}</li>
        <li>{props.info.three}</li>
        <li
          style={
            props.info.four === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.four}
        </li>
        <li
          style={
            props.info.five === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.five}
        </li>
        <li
          style={
            props.info.six === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.six}
        </li>
        <li
          style={
            props.info.seven === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.seven}
        </li>
        <li
          style={
            props.info.eight === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.eight}
        </li>
        <li
          style={
            props.info.nine === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.nine}
        </li>
        <li
          style={
            props.info.ten === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.ten}
        </li>
        <li
          style={
            props.info.eleven === undefined
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {props.info.eleven}
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
  }
`;
export default ShopBar;
