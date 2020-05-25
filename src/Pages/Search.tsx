import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import SearchSelect from "../Components/SearchSelect";
import SearchProduct from "../Components/SearchProduct";
import SearchImg from "../Images/si.png";
import { ShopMenus } from "../data/data";
import { FrontData } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux";
import { setCurrentPage, setPageArray } from "../Redux/pageNation";
const Search = () => {
  const [boolOne, setBoolOne] = useState<boolean>(false);
  const [boolTwo, setBoolTwo] = useState<boolean>(false);
  const { pageArray, currentPage, slide } = useSelector(
    (redux: RootState) => redux.pageNation
  );
  const dispatch = useDispatch();
  const setReduxPageArray = (len: number = FrontData.length) =>
    dispatch(setPageArray(len));
  const setReduxCurrentPage = (currentPage: number = 1) =>
    dispatch(setCurrentPage(currentPage));

  useEffect(() => {
    setReduxPageArray();
  }, []);

  // slice 작업
  const lastGoods = currentPage * slide;
  const firstGoods = lastGoods - slide;
  const SlideData = FrontData.slice(firstGoods, lastGoods);
  return (
    <Layout>
      <SearchDiv>
        <SearchMain>
          <SideContent>
            <SideForm method="POST">
              <SideDl>
                <dt>
                  <div />
                  <span>카테고리</span>
                </dt>
                <dd>
                  <SearchSelect />
                  <SearchSelect />
                </dd>
              </SideDl>
              <SideDl>
                <dt>
                  <div />
                  <span>가격</span>
                </dt>
                <dd
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <input type="text" />
                  &nbsp;<span>~</span>
                  <input type="text" />
                  &nbsp;<span> 원</span>
                </dd>
              </SideDl>
              <button type="submit">검색</button>
            </SideForm>
          </SideContent>
          <ResultBox>
            <SearchResult>
              <span style={{ color: "red" }}>""</span>
              <span>검색결과 285개</span>
            </SearchResult>
            <SearchInputBox>
              <form method="POST">
                <input type="text" />
                <button type="submit">
                  검색
                  <ImgDiv />
                </button>
              </form>
            </SearchInputBox>
            <ListNum>
              <div>
                <PickList>
                  <li>낮은가격순</li>

                  <li>높은가격순</li>
                </PickList>
              </div>
            </ListNum>
            <ProductDiv>
              {SlideData.map((el: any) => {
                return <SearchProduct info={el} />;
              })}
            </ProductDiv>
            <Pagination>
              <ul>
                {pageArray.map((el, index) => {
                  if (Math.floor(currentPage / 10) === Math.floor(el / 10))
                    return (
                      <span onClick={() => setReduxCurrentPage(index + 1)}>
                        {el}
                      </span>
                    );
                  else if (
                    Math.floor(currentPage / 10) === Math.floor((el - 1) / 10)
                  )
                    return (
                      <span onClick={() => setReduxCurrentPage(index + 1)}>
                        {">"}
                      </span>
                    );
                  else if (
                    Math.floor(currentPage / 10) === Math.floor((el + 1) / 10)
                  )
                    return (
                      <span onClick={() => setReduxCurrentPage(index + 1)}>
                        {"<"}
                      </span>
                    );
                })}
              </ul>
            </Pagination>
          </ResultBox>
        </SearchMain>
      </SearchDiv>
    </Layout>
  );
};
const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SearchMain = styled.div`
  display: flex;
  width: 1200px;

  border: 1px solid black;
  margin-top: 45px;
`;

const SideContent = styled.div`
  display: block;
  width: 300px;
  height: 508px;
  border: 1px solid black;
`;
const SideForm = styled.form`
  display: block;
  width: 100%;
  height: 100%;

  button {
    width: 198px;
    height: 39.6px;
    background-color: #979797;
    color: white;
    font-size: 12px;
  }
`;
const ResultBox = styled.div`
  display: block;
  width: 100%;
  min-width: 960px;
  height: 100%;
  border: 1px solid black;
  margin-left: 30px;
`;
const SideDl = styled.dl`
  width: 100%;
  margin-bottom: 30px;
  dt {
    display: block;
    width: 100%;
    height: 35.8px;
    font-size: 14px;
    div {
      width: 25px;
      border-top: 1px solid #cccccc;
      margin-bottom: 8px;
    }
  }
  dd {
    width: 100%;
    input {
      width: 175px;
      height: 24px;
      margin-bottom: 10px;
      border: 1px solid #cccccc;
    }
    span {
      font-size: 12px;
      padding-top: 5px;
    }
  }
`;
const SearchResult = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 12px;
`;
const SearchInputBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 117px;
  border: 3px solid #eeeeee;
  form {
    display: flex;
    justify-content: center;
    width: 100%;
    input {
      width: 260px;
      margin-right: 10px;
    }
    button {
      position: relative;
      width: 100px;
      height: 31px;
      background-color: #3e3d3c;
      color: white;
      font-size: 13px;
    }
  }
`;
const ImgDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  width: 18px;
  height: 18px;
  background-image: url("http://www.naturestore.co.kr/data/skin/front/the_living/js/jquery/chosen/chosen-sprite.png");
  background-position-x: -31px;
  background-position-y: -19px;
`;

const ListNum = styled.div`
  width: 100%;

  color: #111111;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid black;
  margin-top: 20px;
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
      cursor: pointer;
      :hover {
        border: 1px solid gray;
      }
    }
  }
`;
export default Search;
