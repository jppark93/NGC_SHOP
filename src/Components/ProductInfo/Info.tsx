import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Info = (props : any) => {
  const obj = [
    {
      img:
        "http://www.naturestore.co.kr/data/editor/goods/180820/mileage_130144.jpg",
    },
    {
      img:
        "http://thenature.speedgabia.com/detail/apparel_20SS/20SS-ORIGINAL-INTRO.jpg",
    },
    {
      img:
        "http://thenature.speedgabia.com/detail/apparel_20SS/N202UTS530-CARBONBLACK.jpg",
    },
    {
      img:
        "http://thenature.speedgabia.com/detail/apparel_20SS/N202UTS530_gosi.jpg",
    },
  ];
  return (
    <ItemDiv>
      <h3>상품상세정보</h3>
      <ImgDiv>
        {
        props.detailImages.map((el: any) => {
          return <img src={el} alt="" />;
        })
      }
        {/*
          obj.map((el: any) => {
            return <img src={el.img} alt="" />;
          })
          */
        }
      </ImgDiv>
    </ItemDiv>
  );
};
const ItemDiv = styled.div`
  display: block;

  width: 100%;
  h3 {
    font-size: 18px;
    width: 100%;
    height: 82px;
    padding: 45px 0px 10px;
    color: #111111;
    font-weight: bold;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  img {
    display: flex;
    width: 800px;
    background-image: 100%;
  }
`;
export default Info;
