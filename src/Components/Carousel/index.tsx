import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../Images/car1.jpg";

const Carousel = (props: any) => {
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
  height: 700px;
  img {
    width: 100%;
    height: 700px;
  }
`;

export default Carousel;
