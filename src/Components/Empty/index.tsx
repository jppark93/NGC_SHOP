import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../Images/car1.jpg";

const Empty = () => {
  return (
    <SlideBlock>
      <img src={Img} alt="d" />
    </SlideBlock>
  );
};
const SlideBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 0.3px;
  img {
    width: 100%;
  }
`;

export default Empty;
