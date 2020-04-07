import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Next from "../Images/next.png";
import Next2 from "../Images/next2.png";
import Layout from "../Components/Layout";
import PricePlus from "../Images/priceplus.png";
import PriceTotal from "../Images/pricetotal.png";
const Cart = () => {
  return (
    <Layout>
      <DIV>
        <SignUpBlock>
          <TOP>
            <h3>장바구니</h3>
            <ol>
              <li>
                <h1>01</h1>&nbsp;장바구니&nbsp;&nbsp;
                <img src={Next} />
              </li>

              <li>
                <h1>02</h1>&nbsp;주문서작성/결제&nbsp;&nbsp;
                <img src={Next2} />
              </li>

              <li>
                <h1>03</h1>&nbsp;주문완료
              </li>
            </ol>
          </TOP>
          <Basket>
            <span>장바구니에 담겨있는 상품이 없습니다.</span>
          </Basket>
          <PriceDiv>
            <Price>
              <Num>
                <span>
                  총 <h1>0</h1>개의 상품금액
                </span>
                <span>
                  <h1>0</h1>원
                </span>
              </Num>
              <span className="price">
                <img src={PricePlus} alt="" />
              </span>
              <Num2>
                <span>배송비</span>
                <span>
                  <h1>0</h1>원
                </span>
              </Num2>
              <span className="price">
                <img src={PriceTotal} alt="" />
              </span>
              <Num3>
                <span>합계</span>
                <span>
                  <h1>0</h1>원
                </span>
              </Num3>
            </Price>
          </PriceDiv>
        </SignUpBlock>
      </DIV>
    </Layout>
  );
};
const DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 85px;
`;
const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-top: 85px;
`;

const TOP = styled.div`
  display: flex;

  width: 100%;
  height: 63px;
  border-bottom: 1px solid #999;
  font-size: 14px;
  h3 {
    font-size: 27px;
    color: #222222;
    font-weight: bold;
  }
  ol {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  li {
    display: flex;
    margin-right: 10px;
    color: #d1d1d1;
    :first-child {
      color: #dd3d42;
    }
    h1 {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 113px;
  border: 1px solid gray;
  margin-top: 50px;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  width: 357px;
  height: 64px;

  margin-left: auto;
  margin-right: 40px;
  .price {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 52px;
    height: 64px;
    img {
      width: 22px;
      height: 22px;
      background-size: 100%;
      margin-bottom: 20px;
      margin-left: 15px;
    }
  }
`;
const Num = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
  height: 64px;

  span {
    display: flex;
    margin-left: auto;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    :nth-child(2) {
      color: #dd3d42;
    }

    h1 {
      font-weight: bold;
    }
  }
`;
const Num2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 64px;

  span {
    display: flex;
    margin-left: auto;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    :nth-child(2) {
      color: #dd3d42;
    }

    h1 {
      font-weight: bold;
    }
  }
`;
const Num3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 42px;
  height: 64px;

  span {
    display: flex;
    margin-left: auto;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    :nth-child(2) {
      color: #dd3d42;
    }

    h1 {
      font-weight: bold;
    }
  }
`;
const Basket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 139px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  color: #444444;
`;
export default Cart;
