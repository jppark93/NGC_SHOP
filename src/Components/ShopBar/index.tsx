import React from "react";
import styled from "styled-components";

const ShopBar = (props: any) => {
  return (
    <BarLi>
      <a>NEW ARRIVAL</a>
      <ul>
        <li>19FW APPAREL</li>
        <li>19FW BAG&SHOES</li>
      </ul>
    </BarLi>
  );
};
const BarLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92.4px;
  color: black;
  font-size: 15px;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    width: 100%;
    height: 36.4px;
    padding-left: 12px;
  }
  ul {
    width: 100%;
    height: 56px;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 28px;
      color: #343434;
      font-size: 12px;
      padding-left: 15px;
    }
  }
`;
export default ShopBar;
