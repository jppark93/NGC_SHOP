import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import Layout from "../Components/Layout";
import MainInfo from "../Components/MainInfo";
const Main = () => {
  return (
    <Layout>
      <Carousel />
      <MainInfo />
    </Layout>
  );
};
const MainBlock = styled.div`
  width: 100%;
`;
export default Main;
