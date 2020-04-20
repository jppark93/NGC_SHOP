import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <ProductLi>
      <Link to="/product" style={{ textDecoration: "none" }}>
        <ProductDiv>
          <Img>
            <img
              src="http://www.naturestore.co.kr/data/goods/20/03/13/1000002763/1000002763_main_051.jpg"
              alt="product"
            />
          </Img>
          <EX>
            <h1>
              <span>내셔널지오그래픽</span> N202UTS920{" "}
              <span>테라핀 오버핏 반팔 티셔츠</span> YELLOW
            </h1>
            <h2>49,000원</h2>
            <h3>49,000원</h3>
          </EX>
        </ProductDiv>
      </Link>
    </ProductLi>
  );
};
const ProductLi = styled.li`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 384.6px;

  border: 1px solid pink;
  margin-top: 40px;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  margin-left: 10px;
  border: 1px solid black;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 280px;
  img {
    width: 100%;
    height: 280px;
    background-size: 100%;
  }
`;
const EX = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: #333333;
    font-size: 12px;
    span {
      font-weight: bold;
    }
  }
  h2 {
    margin-top: 10px;
    font-size: 12px;
    color: #888888;
    text-decoration: line-through;
  }
  h3 {
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
  }
`;
export default Product;
