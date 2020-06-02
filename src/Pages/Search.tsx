import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import SearchSelect from "../Components/SearchSelect";
import ChildSearchSelect from "../Components/SearchSelect/child";
import SearchProduct from "../Components/SearchProduct";
import SearchImg from "../Images/si.png";
import { withRouter } from "react-router-dom";
import { nameSearchRequest, etcSearchRequest } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux";
import { setCurrentPage, setPageArray } from "../Redux/pageNation";
const Search = (props: any) => {
  const [FrontData, setFrontData] = useState<Array<any>>([]);
  const [boolOne, setBoolOne] = useState<boolean>(false);
  const [boolTwo, setBoolTwo] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<{ value: string }>({
    value: "",
  });
  const [childSelectValue, setChildSelectValue] = useState<{ value: string }>({
    value: "",
  });
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [childSelect, setChildSelect] = useState({
    outer: "OUTER",
    top: "TOP",
    bottom: "BOTTOM",
  });
  const { pageArray, currentPage, slide } = useSelector(
    (redux: RootState) => redux.pageNation
  );

  const dispatch = useDispatch();
  const setReduxPageArray = (len: number = FrontData.length) =>
    dispatch(setPageArray(len));
  const setReduxCurrentPage = (currentPage: number = 1) =>
    dispatch(setCurrentPage(currentPage));

  useEffect(() => {
    let newFrontData: Array<any>;
    console.log(`word : ${props.match.params.word}`);
    if (props.match.params.word !== undefined) {
      console.log("이름검색");
      newFrontData = nameSearchRequest(props.match.params.word);
    } else {
      console.log("etc검색");
      newFrontData = etcSearchRequest(
        props.match.params.kind1,
        props.match.params.kind2,
        props.match.params.saleMore,
        props.match.params.saleLess
      );
    }
    setFrontData(newFrontData);
    setReduxPageArray(newFrontData.length);
    setReduxCurrentPage();
  }, [props.match.params.word]);
  const selectValueChange = (e: any) => {
    let newValue = { value: e };
    setSelectValue(newValue);
    console.log(newValue);
  };
  const childSelectValueChange = (e: any) => {
    let secondValue = { value: e };
    setChildSelectValue(secondValue);
    console.log(secondValue);
  };

  const lowPrice = (e: boolean) => {
    setBoolOne(e);
    setBoolTwo(false);
    if (boolOne === true) {
      setFrontData(
        FrontData.sort((a: any, b: any) => {
          return parseInt(b.price) - parseInt(a.price);
        })
      );
    } else {
      setFrontData(
        FrontData.sort((a: any, b: any) => {
          return parseInt(a.price) - parseInt(b.price);
        })
      );
    }
  };
  const highPrice = (e: boolean) => {
    setBoolTwo(e);
    setBoolOne(false);
    if (boolTwo === true) {
      FrontData.sort((a: any, b: any) => {
        return parseInt(a.price) - parseInt(b.price);
      });
    } else {
      FrontData.sort((a: any, b: any) => {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
  };

  const Min = (e: any) => {
    let saleMore = e.target.value;
    setMinPrice(saleMore);
    console.log(saleMore);
  };
  const Max = (e: any) => {
    let saleLess = e.target.value;
    setMaxPrice(saleLess);
    console.log(saleLess);
  };
  const etcSearch = () => {
    props.history.push(
      `/search/etc/kind1/${selectValue.value.toLowerCase()}/kind2/${childSelectValue.value.toLowerCase()}/saleMore/${
        parseInt(minPrice) === NaN ? 0 : parseInt(minPrice)
      }/saleLess/${parseInt(maxPrice) === NaN ? 0 : parseInt(maxPrice)}`
    );
  };
  // slice 작업
  const lastGoods = currentPage * 18;
  const firstGoods = lastGoods - 18;
  const SlideData = FrontData.slice(firstGoods, lastGoods);
  const noneResult = () => {
    if (SlideData.length === 0) {
      return <None>상품이 존재하지 않습니다</None>;
    } else {
      return SlideData.map((el: any) => {
        return <SearchProduct info={el} />;
      });
    }
  };
  return (
    <Layout>
      <SearchDiv>
        <SearchMain>
          <SideContent>
            <SideForm
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                etcSearch();
              }}
            >
              <SideDl>
                <dt>
                  <div />
                  <span>카테고리</span>
                </dt>
                <dd>
                  <SearchSelect
                    value={selectValue.value}
                    option={selectValueChange}
                  />
                  <ChildSearchSelect
                    parentValue={selectValue.value}
                    value={childSelectValue.value}
                    select={childSelect}
                    option={childSelectValueChange}
                  />
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
                  <input type="text" onChange={Min} value={minPrice} />
                  &nbsp;<span>~</span>
                  <input type="text" onChange={Max} value={maxPrice} />
                  &nbsp;<span> 원</span>
                </dd>
              </SideDl>
              <button type="submit">검색</button>
            </SideForm>
          </SideContent>
          <ResultBox>
            <SearchResult>
              <span style={{ color: "red" }}>
                "
                {props.match.params.word !== undefined
                  ? props.match.params.word === "allgoods"
                    ? "전상품"
                    : props.match.params.word
                  : "조건"}
                "{" "}
              </span>
              <span>검색결과 {FrontData.length}개</span>
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
                  <li
                    style={boolOne ? { color: "#111" } : { color: "gray" }}
                    onClick={() => lowPrice(true)}
                  >
                    낮은가격순
                  </li>

                  <li
                    style={boolTwo ? { color: "#111" } : { color: "gray" }}
                    onClick={() => highPrice(true)}
                  >
                    높은가격순
                  </li>
                </PickList>
              </div>
            </ListNum>
            <ProductDiv>{noneResult()}</ProductDiv>
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

  margin-top: 45px;
`;

const SideContent = styled.div`
  display: block;
  width: 300px;
  height: 508px;
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
const None = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0px auto 0px auto;
`;
export default withRouter(Search);
