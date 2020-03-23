import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../Images/car1.jpg";

const Carousel = () => {
  return (
    <SlideBlock>
      <CarouselImg src={Img} alt="img"></CarouselImg>
    </SlideBlock>
  );
};

export default Carousel;

const SlideBlock = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const CarouselImg = styled.img`
  background-size: 70%;
`;
