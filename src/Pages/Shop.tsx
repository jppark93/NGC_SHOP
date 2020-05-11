import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import ShopBar from "../Components/ShopBar";
import Product from "../Components/Product";
import { ShopMenus } from "../data/data";
import { ShopData } from "../data/data";
const Shop = () => {
  return (
    <Layout>
      <ShopDiv>
        <div>
          <ShopMenu>
            <MenuBar>TOP</MenuBar>
            {ShopMenus.map((el, index) => {
              return (
                <ShopBar
                  key={index}
                  title={el.title}
                  one={el.one}
                  two={el.two}
                  three={el.three}
                  four={el.four}
                  five={el.five}
                  six={el.six}
                  seven={el.seven}
                  eight={el.eight}
                  nine={el.nine}
                  ten={el.ten}
                  eleven={el.eleven}
                />
              );
            })}
          </ShopMenu>
        </div>
        <ShopProduct>
          <ListNum>
            <span>
              상품&nbsp;<h1>54</h1>&nbsp;개
            </span>
            <div>
              <PickList>
                <li>낮은가격순</li>
                <li>높은가격순</li>
              </PickList>
            </div>
          </ListNum>
          <div>
            <ProductDiv>
              {ShopData.map((el) => {
                return (
                  <Product
                    img={el.img}
                    name={el.name}
                    sale={el.sale}
                    price={el.price}
                  />
                );
              })}
            </ProductDiv>
          </div>
          <Pagination>
            <ul>
              <span>1</span>
              <span>2</span>
            </ul>
          </Pagination>
        </ShopProduct>
      </ShopDiv>
    </Layout>
  );
};

const ShopDiv = styled.div`
  display: flex;
  width: 1440px;
`;
const ShopMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 277.88px;

  margin-top: 50px;
  margin-left: 20px;
`;
const MenuBar = styled.div`
  width: 100%;
  height: 41px;
  color: #111111;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #111;
`;
const ShopProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  margin-top: 50px;
`;
const ListNum = styled.div`
  width: 100%;
  height: 79.8px;
  color: #111111;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  span {
    display: flex;
    width: 100%;
    height: 30.8px;
    border-bottom: 1px solid #111;
    h1 {
      font-weight: bold;
    }
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 49px;
    color: #111111;
  }
`;
const PickList = styled.ul`
  display: flex;
  width: 525.05px;
  height: 22.6px;

  li {
    display: flex;
    align-items: center;
    width: 73.13px;
    height: 22.6px;
    font-size: 12px;
    cursor: pointer;
  }
`;
const ProductDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Pagination = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid #e6e6e6;
  margin-top: 40px;
  margin-bottom: 80px;
  ul {
    display: flex;
    justify-content: center;
    height: 48px;
    width: 100%;
    margin-top: 40px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      font-size: 12px;
      border: 1px solid black;
      margin-right: 5px;
    }
  }
`;
export default Shop;
