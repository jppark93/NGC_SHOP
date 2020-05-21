import * as React from "react";
import styled from "styled-components";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/index";
import { setLogOut } from "../../Redux/login";

const Nav = () => {
  const { loginState, userId } = useSelector((redux: RootState) => redux.login);
  const { basket } = useSelector((redux: RootState) => redux.shopBasket);
  const dispatch = useDispatch();

  const onLogOutEvent = () => {
    dispatch(setLogOut());
  };

  const onLogInComponent = () => {
    return (
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <Li>LOGIN</Li>
      </Link>
    );
  };
  const onLogOutComponent = () => {
    return (
      <Link to="./" style={{ textDecoration: "none" }}>
        <Li onClick={onLogOutEvent}>LOGOUT</Li>
      </Link>
    );
  };
  return (
    <NavBlock>
      <ItemBlock>
        <Link to="/">
          <NavImage>
            <img src={Logo} alt="logo"></img>
          </NavImage>
        </Link>
        <NavSearch>
          <TextArea />
          <SearchButton />
        </NavSearch>

        <NavRight>
          <div>
            <RightItem>
              {loginState ? onLogOutComponent() : onLogInComponent()}
              <Li>JOIN</Li>
              <Li>MYPAGE</Li>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Li>
                  CART(<Strong>{basket.length}</Strong>)
                </Li>
              </Link>
              <Li>CS CENTER</Li>
              <Li>매장개설문의</Li>
              <Li>매장찾기</Li>
              <Li>고객의 소리</Li>
              <Li>B2B</Li>
            </RightItem>
          </div>
        </NavRight>
      </ItemBlock>
    </NavBlock>
  );
};

export default Nav;

const NavBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 95px;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 99%;
  height: 50px;
  margin-left: 40px;
`;
const NavImage = styled.div`
  width: 211px;
  height: 35px;
  z-index: 100;
  margin-right: -250px;
  cursor: pointer;
`;
const NavSearch = styled.div`
  position: relative;
  width: 400px;
  height: 38px;
  border: none;
  margin-left: 27%;
  border-bottom: 2px solid black;
  z-index: 110;
  margin-bottom: 10px;
`;
const TextArea = styled.input`
  width: 88%;
  height: 100%;
  padding: 5px 0px 5px 15px;
  font-size: 20px;
  font-weight: 700;
  border: none;
`;
const SearchButton = styled.div`
  background-image: url("http://www.naturestore.co.kr/data/skin/front/the_living/img/common/btn/btn_top_search-1.png");
  position: absolute;
  width: 50px;
  height: 38px;
  right: 1px;
  top: 0px;
  border: none;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  width: 1000px;
  height: 40px;
  margin-left: auto;
  margin-right: 1%;
  div {
    display: flex;
    margin-left: auto;
  }
`;
const RightItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
  li {
    text-decoration: none;
    color: black;
  }
`;
const Li = styled.li`
  font-size: 13px;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
  margin-left: 15px;
  margin-bottom: 3px;
  cursor: pointer;
`;
const Strong = styled.span`
  font-weight: 800;
`;
