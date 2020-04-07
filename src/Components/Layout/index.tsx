import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Footer from "../Footer";
import Menu from "../Menu";
import Empty from "../Empty";
const Layout = (props: any) => {
  return (
    <MainBlock>
      <div>
        <Nav />
        <Menu />
        <Empty />
        {props.children}
        <Footer />
      </div>
    </MainBlock>
  );
};
const MainBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export default Layout;
