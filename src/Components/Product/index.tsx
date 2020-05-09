import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
const Product = (props: any) => {
  const goDetail = () => {
    props.history.push("/product");
  };
  return (
    <ProductLi>
      <ProductDiv onClick={goDetail}>
        <Img>
          <img src={props.img} alt="product" />
        </Img>
        <EX>
          <h1>
            <span>{props.name}</span>
          </h1>
          <h2>{props.sale}</h2>
          <h3>{props.price}</h3>
        </EX>
      </ProductDiv>
    </ProductLi>
  );
};
const ProductLi = styled.li`
  display: flex;
  justify-content: center;

  width: 25%;
  height: 384.6px;
  margin-top: 40px;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 300px;
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
export default withRouter(Product);
