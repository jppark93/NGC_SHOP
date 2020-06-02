import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Footer from "../Footer";
import Menu from "../Menu";
import Empty from "../Empty";
import topBtn from "../../Images/top.png";
const Layout = (props: any) => {
  const [num, setNum] = useState<number>(0);

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(num);
    }
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollTop = () => {
    let copynum = setInterval(scrollStep(), props.delayInMs);
    setNum(copynum);
  };
  return (
    <MainBlock>
      <Nav />
      <Menu />
      {props.children}
      <Footer />
      <TOP onClick={() => scrollTop()}>
        <img src={topBtn} alt="top" />
      </TOP>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  display: block;
  position: relative;
  width: 100%;
  @media (max-width: 1450px) {
    width: 1920px;
  }
`;
const DIV = styled.div`
  display: block;
  width: 100%;
`;
const TOP = styled.button`
  position: fixed;
  bottom: 70px;
  right: 70px;

  img {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 50px;
    height: 50px;
  }
`;
export default Layout;
