import styled from "styled-components";
import React from "react";

const Item = () => {
  return <ItemBox></ItemBox>;
};
const ItemBox = styled.td`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  align-items: center;
  border-bottom: 1px solid #999;
`;
export default Item;
