import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import Img from "../Images/testing.jpg";
import Info from "../Components/ProductInfo/Info";
import ExChange from "../Components/ProductInfo/ExChange";
type GreetingsProps = {
  onClick: (changeNum: number) => void;
};
const ProductDetail = ({ onClick }: GreetingsProps) => {
  const [changeNum, setChangeNum] = useState<number>(1);
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
                <img src="http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg"></img>
                <img src="http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg"></img>
                <img src="http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg"></img>
                <img src="http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg"></img>
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
                <dl>
                  <dt>정가</dt>
                  <dd>69,000원</dd>
                </dl>
                <dl>
                  <dt>판매가</dt>
                  <dd>
                    <h1>69,000원</h1>
                  </dd>
                </dl>
                <dl>
                  <dt>모델명</dt>
                  <dd>N202MRG640905</dd>
                </dl>
                <dl>
                  <dt>원산지</dt>
                  <dd>한국</dd>
                </dl>
                <dl>
                  <dt>제조사</dt>
                  <dd>(주)더네이쳐홀딩스</dd>
                </dl>
                <dl>
                  <dt>브랜드</dt>
                  <dd>내셔널지오그래픽</dd>
                </dl>
                <dl>
                  <dt>출시일</dt>
                  <dd>2020-04-17</dd>
                </dl>
                <Size>
                  <dl>
                    <dt>SIZE</dt>
                    <dd>
                      <select>
                        <option>= 옵션 : 가격 =</option>
                        <option>095</option>
                        <option>100</option>
                        <option>105</option>
                        <option>110</option>
                      </select>
                    </dd>
                  </dl>
                </Size>
                <BtnChoice>
                  <button type="button">장바구니</button>
                  <button type="button">찜하기</button>
                  <button type="button">바로구매</button>
                </BtnChoice>
              </ItemDetail>
            </PdItemInfo>
          </Pd>
          <InfoDiv>
            <BtnDiv>
              <ul>
                <li></li>
                <li onClick={() => setChangeNum(1)}>상품상세정보</li>
                <li onClick={() => setChangeNum(2)}>배송안내</li>
                <li onClick={() => setChangeNum(3)}>교환 및 반품안내</li>
                <li onClick={() => setChangeNum(4)}>상품후기</li>
                <li></li>
              </ul>
            </BtnDiv>
            <ExChange />
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
  border: 1px solid pink;
`;
const Pd = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  border: 1px solid pink;
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
  border: 1px solid pink;

  img {
    width: 500px;
    height: 500px;
  }
`;
const PdItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 556px;
  height: 671px;
  border: 1px solid black;
  margin-left: auto;
`;
const PdName = styled.div`
  width: 100%;
  height: 56px;
  font-size: 18px;
  color: #111111;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  h1 {
    width: 405px;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 326px;
  margin-top: 10px;
  border: 1px solid pink;
  dl {
    display: flex;
    align-items: center;
    width: 100%;
    height: 37px;
    dt {
      display: flex;
      align-items: center;
      width: 70px;
      height: 18px;
      color: #888888;
      font-size: 12px;
      font-weight: bold;
    }
    dd {
      display: flex;
      align-items: center;
      width: 470px;
      height: 18px;
      font-size: 12px;
      color: #111111;
      h1 {
        font-size: 16px;
        color: #111111;
        font-weight: bold;
      }
    }
  }
`;
const Size = styled.div`
  display: flex;
  width: 550px;
  height: 61px;
  padding: 10px 0 5px 0;
  border-top: 1px solid #dbdbdb;
  dl {
    display: flex;
    width: 100%;
    height: 45px;
    dt {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #888888;
    }
    dd {
      width: 470px;
      height: 31px;
      border: #dbdbdb;
      select {
        width: 100%;
        height: 100%;
        color: #717171;
        font-size: 13px;
      }
    }
  }
`;
const BtnChoice = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding-top: 20px;
  border-top: 1px solid #111111;
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
        background-color: yellow;
        color: black;
      }
    }
  }
`;
const Imgs = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  border: 1px solid blue;

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

  margin-top: 100px;
  border: 1px solid red;
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

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 43px;
      border: 1px solid #dadada;
      margin-top: auto;
      font-size: 13px;
      color: #999999;
      font-weight: bold;
      &:first-child {
        border: none;
        border-bottom: 1px solid #dadada;
      }
      &:nth-child(2) {
        height: 100%;
        border-bottom: 1px solid white;
        color: #111111;
      }
      :last-child {
        border: none;
        border-bottom: 1px solid #dadada;
      }
    }
  }
`;
export default ProductDetail;
