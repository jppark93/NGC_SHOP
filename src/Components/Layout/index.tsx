import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Footer from "../Footer";
import Menu from "../Menu";
import Empty from "../Empty";
const Layout = (props: any) => {
  return (
    <MainBlock>
      <Nav />
      <Menu />
      {props.children}
      <Footer />
    </MainBlock>
  );
};

const MainBlock = styled.div`
  display: block;
  position: relative;
  width: 100%;
  @media (max-width: 1200px) {
    width: 1920px;
  }
`;
const DIV = styled.div`
  display: block;
  width: 100%;
`;
const BOX = styled.div``;
export default Layout;
