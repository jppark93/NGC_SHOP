import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import Layout from "../Components/Layout";
import MainInfo from "../Components/MainInfo";
import Face from "../Images/fb.png";
import Youtube from "../Images/youtube.png";
import Insta from "../Images/insta.png";
import Naver from "../Images/naver.jpg";
const Main = () => {
  return (
    <Layout>
      <Carousel />
      <MainInfo />
      <Social>INSTAGRAM</Social>
      <SNS>
        <a href="https://www.facebook.com/thenature7">
          <img src={Face} alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCKVExhV0R41VJr2q74J8ymw?view_as=subscriber">
          <img src={Youtube} alt="" />
        </a>
        <a href="https://www.instagram.com/ng_apparel/">
          <img src={Insta} alt="" />
        </a>
        <a href="https://blog.naver.com/thenatureholdings">
          <img src={Naver} alt="" />
        </a>
      </SNS>
    </Layout>
  );
};
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 1440px;
  height: 255px;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
`;
const SNS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 1440px;
  height: 80px;
  margin-bottom: 80px;
  a {
    margin-right: 5px;
  }
`;
export default Main;
