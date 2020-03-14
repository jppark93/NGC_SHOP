import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Layout from "../Components/Layout";
const Main = () => {
  return (
    <Layout>
      <Carousel />
    </Layout>
  );
};
const MainBlock = styled.div`
  width: 100%;
`;
export default Main;
