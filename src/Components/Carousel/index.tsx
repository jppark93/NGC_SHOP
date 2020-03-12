import React from "react";
import styled from "styled-components";

const Carousel = () => {
  return (
    <SlideBlock>
      <img
        src="http://www.naturestore.co.kr/data/skin/front/the_living/img/banner/slider_4146068877/c97e43d1919407bd0553a696207ead2c_51313.jpg"
        alt="img"
      ></img>
    </SlideBlock>
  );
};

export default Carousel;

const SlideBlock = styled.div`
  width: 100%;
`;
