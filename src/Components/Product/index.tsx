import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <Link to="/product">
      <ProductLi>
        <ProductDiv>
          <Img>
            <img
              src="http://www.naturestore.co.kr/data/goods/20/03/13/1000002763/1000002763_main_051.jpg"
              alt="product"
            />
          </Img>
          <EX></EX>
        </ProductDiv>
      </ProductLi>
    </Link>
  );
};
const ProductLi = styled.li`
  display: flex;
  justify-content: center;
  width: 297.84px;
  height: 384.6px;

  border: 1px solid pink;
  margin-top: 40px;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  border: 1px solid black;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 280px;
  img {
    width: 279px;
    height: 280px;
    background-size: 100%;
  }
`;
const EX = styled.div`
  display: flex;
  width: 100%;
`;
export default Product;
