import * as React from "react";
import styled from "styled-components";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
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
          <RightItem>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Li>LOGIN</Li>
            </Link>
            <Li>JOIN</Li>
            <Li>MYPAGE</Li>
            <Li>
              CART(<Strong>0</Strong>)
            </Li>
            <Li>CS CENTER</Li>
            <Li>매장개설문의</Li>
            <Li>매장찾기</Li>
            <Li>고객의 소리</Li>
            <Li>B2B</Li>
          </RightItem>
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
  width: 1920px;
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
  width: 350px;
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
  width: 650px;
  height: 40px;
  margin-left: auto;
  margin-right: 1%;
`;
const RightItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 630px;
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
