import React from "react";
import styled from "styled-components";
import MainImg from "./MainImg";
import { IMGS } from "../../data/data";
const MainInfo = () => {
  return (
    <MainInfoBlock>
      {IMGS.map((el) => {
        return (
          <MainImg image={el.img} title={el.title} contents={el.contents} />
        );
      })}
    </MainInfoBlock>
  );
};
const MainInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid pink;
  margin-top: 80px;
`;

export default MainInfo;
