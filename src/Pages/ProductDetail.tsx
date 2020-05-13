import React, { useState } from "react";
import styled, { css } from "styled-components";
import Layout from "../Components/Layout";
import Img from "../Images/testing.jpg";
import Info from "../Components/ProductInfo/Info";
import ExChange from "../Components/ProductInfo/ExChange";
import Review from "../Components/ProductInfo/Review";
import Delivery from "../Components/ProductInfo/Delivery";
import ItemList from "../Components/Item";
import { OuterIMG } from "../data/data";
const ProductDetail = () => {
  const [changeNum, setChangeNum] = useState<string>("1");
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [sizeIndex, setSizeIndex] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(169000);
  const [selectValue, setSelectValue] = useState({ value: "" });
  const [priceArr, setPriceArr] = useState([{ Size: "" }]);
  const sizeArr = [
    { outerSize: "090" },
    { outerSize: "095" },
    { outerSize: "100" },
    { outerSize: "105" },
  ];

  const pageChange = () => {
    if (changeNum === "1") {
      return <Info />;
    } else if (changeNum === "2") {
      return <ExChange />;
    } else if (changeNum === "3") {
      return <Delivery />;
    } else if (changeNum === "4") {
      return <Review />;
    }
  };
  const priceChange = (e: any) => {
    setTotalPrice(e);
  };

  const Func = (e: any) => {
    setSelectValue({ value: e.target.value });
  };
  const selectChange = () => {
    console.log(selectValue.value.length);
    if (selectValue.value.length > 3) {
      return <div />;
    } else {
      if (selectValue.value.length > 0 && selectValue.value.length <= 3) {
        return <ItemList price={priceChange} outerSize={selectValue.value} />;
      }
    }
  };
  const totalPriceChange = () => {
    if (selectValue.value.length > 3) {
      return <div />;
    } else {
      if (selectValue.value.length > 0 && selectValue.value.length <= 3) {
        return (
          <ItemPrice>
            <Price>
              <PriceDt style={{ fontSize: "12px" }}>총 상품금액</PriceDt>
              <PriceDd style={{ fontSize: "14px" }}>{totalPrice}원</PriceDd>
            </Price>
            <Price style={{ borderTop: "1px solid #dbdbdb" }}>
              <PriceDt>총 합계금액</PriceDt>
              <PriceDd style={{ fontSize: "20px", color: "#dd3d42" }}>
                {totalPrice.toString()}원
              </PriceDd>
            </Price>
          </ItemPrice>
        );
      }
    }
  };

  return (
    <Layout>
      <PdBlock>
        <PdInfo>
          <Pd>
            <PdBox>
              <PdImg>
                <img src={Img} alt="pd"></img>
              </PdImg>
              <Imgs>
                {OuterIMG.map((el, index) => {
                  return <img src={el.img} key={index} />;
                })}
              </Imgs>
            </PdBox>
            <PdItemInfo>
              <PdName>
                <h1>
                  내셔널지오그래픽 N202MRG640 남성 소매배색 빅 로고 래쉬가드
                  ADMIRAL MINT
                </h1>
              </PdName>
              <ItemDetail>
                <ProductDl>
                  <ProductDt>정가</ProductDt>
                  <ProductDd>69,000원</ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>판매가</ProductDt>
                  <ProductDd>
                    <h1>69,000원</h1>
                  </ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>모델명</ProductDt>
                  <ProductDd>N202MRG640905</ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>원산지</ProductDt>
                  <ProductDd>한국</ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>제조사</ProductDt>
                  <ProductDd>(주)더네이쳐홀딩스</ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>브랜드</ProductDt>
                  <ProductDd>내셔널지오그래픽</ProductDd>
                </ProductDl>
                <ProductDl>
                  <ProductDt>출시일</ProductDt>
                  <ProductDd>2020-04-17</ProductDd>
                </ProductDl>
                <Size>
                  <dl>
                    <dt>SIZE</dt>
                    <dd>
                      <select value={selectValue.value} onChange={Func}>
                        <option>= 옵션 : 가격 =</option>
                        {sizeArr.map((el) => {
                          return (
                            <option value={el.outerSize}>{el.outerSize}</option>
                          );
                        })}
                      </select>
                    </dd>
                  </dl>
                </Size>
              </ItemDetail>
              <ItemChoice>
                <ItemChoiceDiv>{selectChange()}</ItemChoiceDiv>
                {totalPriceChange()}
              </ItemChoice>
              <BtnChoice>
                <button type="button">장바구니</button>
                <button type="button">찜하기</button>
                <button type="button">바로구매</button>
              </BtnChoice>
            </PdItemInfo>
          </Pd>
          <InfoDiv>
            <BtnDiv>
              <ul>
                <InfoLi></InfoLi>
                <InfoLi className={changeNum} onClick={() => setChangeNum("1")}>
                  상품상세정보
                </InfoLi>
                <InfoLi className={changeNum} onClick={() => setChangeNum("2")}>
                  배송안내
                </InfoLi>
                <InfoLi className={changeNum} onClick={() => setChangeNum("3")}>
                  교환 및 반품안내
                </InfoLi>
                <InfoLi className={changeNum} onClick={() => setChangeNum("4")}>
                  상품후기
                </InfoLi>
                <InfoLi></InfoLi>
              </ul>
            </BtnDiv>
            {pageChange()}
          </InfoDiv>
        </PdInfo>
      </PdBlock>
    </Layout>
  );
};
const PdBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const PdInfo = styled.div`
  display: block;
  width: 1200px;
  margin-top: 60px;
`;
const Pd = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const PdBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 602px;
  height: 706px;
`;
const PdImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 602px;
  height: 602px;
  border: 1px solid #ebebeb;

  img {
    width: 500px;
    height: 500px;
  }
`;
const PdItemInfo = styled.div`
  display: block;
  position: relative;
  width: 556px;

  margin-left: auto;
`;
const PdName = styled.div`
  width: 100%;
  height: 65px;
  font-size: 18px;
  color: #111111;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  h1 {
    width: 405px;
    line-height: 1.5;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
  font-family: "Raleway", sans-serif;

  h1 {
    font-size: 16px;
    color: #111111;
    font-weight: bold;
  }
`;
const ProductDl = styled.dl`
  display: flex;
  align-items: center;
  width: 100%;
  height: 37px;
`;
const ProductDt = styled.dt`
  display: flex;
  align-items: center;
  width: 70px;
  height: 18px;
  color: #888888;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ProductDd = styled.dd`
  display: flex;
  align-items: center;
  width: 470px;
  height: 18px;
  font-size: 12px;
  color: #111111;
  margin-bottom: 20px;
`;
const Size = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 15px 0 5px 0;
  border-top: 1px solid #dbdbdb;
  dl {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    dt {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #888888;
      margin-right: 10px;
    }
    dd {
      width: 88%;
      height: 31px;
      border: #dbdbdb;
      margin-left: auto;
      select {
        width: 100%;
        height: 100%;
        color: #717171;
        font-size: 13px;
      }
    }
  }
`;
const ItemChoice = styled.div`
  display: block;
  width: 100%;
  border-top: 1px solid #999;
`;
const ItemChoiceDiv = styled.div`
  display: block;
  width: 100%;
  border-bottom: 1px solid #999;
`;
const ItemPrice = styled.div`
  display: block;
  width: 225px;
  height: 107px;
  margin-left: auto;
`;
const Price = styled.dl`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
`;
const PriceDt = styled.dt`
  position: relative;
  text-align: right;
  width: 100px;
`;
const PriceDd = styled.dd`
  position: relative;
  text-align: right;
  width: 125px;
`;
const BtnChoice = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding-top: 20px;
  button {
    width: 170px;
    height: 52px;
    color: #8a8a8a;
    background-color: white;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #d0d0d0;
    margin-right: 6px;
    &:hover {
      border: 1px solid black;
      color: black;
    }
    :last-child {
      width: 260px;
      height: 52px;
      background-color: black;
      color: white;
      border: none;
      margin: 0px;
      &:hover {
        background-color: #ffdb00;
        color: black;
      }
    }
  }
`;
const Imgs = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  margin-top: 10px;

  img {
    display: flex;
    width: 80px;
    height: 80px;
    background-size: 100%;
    border: none;
    margin-left: 35px;
    &:hover {
      border: 2px solid black;
    }
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-top: 30px;
`;

const BtnDiv = styled.div`
  display: flex;
  width: 100%;
  height: 139px;

  justify-content: center;

  ul {
    display: flex;
    width: 100%;
    height: 58px;

    margin-top: auto;
    cursor: pointer;
  }
`;
const InfoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 43px;
  margin-top: auto;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  color: #999999;
  border: 1px solid #dadada;
  &:first-child {
    border: none;
    border-bottom: 1px solid #dadada;
  }
  :nth-child(2) {
    ${(props) => {
      if (props.className === "1") {
        return css`
          border-bottom: 1px solid white;
          color: #111111;
          height: 100%;
        `;
      } else {
        return css`
          border-bottom: 1px solid #dadada;
          color: #999999;
        `;
      }
    }}
  }
  :nth-child(3) {
    ${(props) => {
      if (props.className === "2") {
        return css`
          border-bottom: 1px solid white;
          color: #111111;
          height: 100%;
        `;
      } else {
        return css`
          border-bottom: 1px solid #dadada;
          color: #999999;
        `;
      }
    }}
  }
  :nth-child(4) {
    ${(props) => {
      if (props.className === "3") {
        return css`
          border-bottom: 1px solid white;
          color: #111111;
          height: 100%;
        `;
      } else {
        return css`
          border-bottom: 1px solid #dadada;
          color: #999999;
        `;
      }
    }}
  }
  :nth-child(5) {
    ${(props) => {
      if (props.className === "4") {
        return css`
          border-bottom: 1px solid white;
          color: #111111;
          height: 100%;
        `;
      } else {
        return css`
          border-bottom: 1px solid #dadada;
          color: #999999;
        `;
      }
    }}
  }
  :last-child {
    border: none;
    border-bottom: 1px solid #dadada;
  }
`;
export default ProductDetail;
