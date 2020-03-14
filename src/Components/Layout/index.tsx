import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Footer from "../Footer";
import Menu from "../Menu";

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
  width: 100%;
`;
export default Layout;
