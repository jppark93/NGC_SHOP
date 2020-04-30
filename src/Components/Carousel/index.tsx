import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Img0 from "../../Images/car1.jpg";
import Img1 from "../../Images/img2.jpg";
import Img2 from "../../Images/img3.jpg";
import next from "../../Images/next3.png";
import Slide from "./Slide";
//import { clearTimeout, clearInterval, setTimeout } from "timers";
import { wait } from "@testing-library/react";

const Carousel = () => {
  const SLIDES: number = 2;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [timerId, setTimerId] = useState<number>(0);
    
  useEffect(()=>{
    let timer = timerId;
    clearTimeout(timer);
    console.log(new Date().toLocaleString() + ") 타이머 초기화 : " + timer);
    timer = setTimeout(() => {
      console.log(new Date().toLocaleString() + ") 타이머 실행 : " + timer);
      nextSlide();
      }, 5000);
    setTimerId(timer); 
    console.log(new Date().toLocaleString() + ") 타이머 생성 : " + timer + " (5초 뒤 실행)");
  }, [currentSlide]);
  

  const nextSlide = () => {
    
    if (currentSlide >= SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    
  };
  const slide = () => {
    if (currentSlide === 0) {
      return <Slide img={Img0} />;
    } else if (currentSlide === 1) {
      return <Slide img={Img1} />;
    } else if (currentSlide === 2) {
      return <Slide img={Img2} />;
    }
  };
  return (
    <Container>
      <BtnDiv onClick={prevSlide}>
        <img src={next} alt="nx" />
      </BtnDiv>

      <BtnDiv2 onClick={nextSlide}>
        <img src={next} alt="nx" />
      </BtnDiv2>

      <SlideBlock>{slide()}</SlideBlock>
    </Container>
  );
};
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 700px;
`;
const SlideBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const BtnDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 1px;
  width: 100px;
  height: 100px;
  z-index: 100;
  img {
    width: 100px;
    height: 100px;
    transform: rotate(180deg);
  }
`;
const BtnDiv2 = styled.div`
  position: absolute;
  top: 45%;
  right: 1px;
  width: 100px;
  height: 100px;
  z-index: 100;
  img {
    width: 100px;
    height: 100px;
  }
`;

export default Carousel;
