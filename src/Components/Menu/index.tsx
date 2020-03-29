import React from "react";
import styled from "styled-components";
import MenuImg from "../../Images/menu.png";

const Menu = () => {
  return (
    <MenuBlock>
      <MenuCategory src={MenuImg}></MenuCategory>
      <MenuList>
        <MenuItem>9DAYS TIME SALE</MenuItem>
        <MenuItem>마일리지 적립 20%</MenuItem>
        <MenuItem>NEW ARRIVAL</MenuItem>
        <MenuItem>MAN</MenuItem>
        <MenuItem>WOMAN</MenuItem>
        <MenuItem>KIDS</MenuItem>
        <MenuItem>BAG</MenuItem>
        <MenuItem>HEAD WEAR</MenuItem>
        <MenuItem>FOOT WEAR</MenuItem>
        <MenuItem>SKIN CARE</MenuItem>
        <MenuItem>SUITCASE</MenuItem>
        <MenuItem>CAMPING</MenuItem>
        <MenuItem>SURF WEAR</MenuItem>
      </MenuList>
    </MenuBlock>
  );
};

export default Menu;

const MenuBlock = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  background-color: #111111;
`;
const MenuCategory = styled.img`
  margin-left: 35px;
  background-color: #333;
  cursor: pointer;
`;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 130px;
  height: 20px;
  color: #ffffff;
  font-size: 13px;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
  font-weight: 800;
  border-right: 1px solid #333;
  &:first-child {
    width: 171px;
  }
  &:nth-child(2) {
    width: 158px;
  }
  &:nth-child(3) {
    width: 150px;
  }
  &:nth-child(8) {
    width: 140px;
  }
  &:nth-child(9) {
    width: 138.38px;
  }
  &:nth-child(13) {
    width: 136.84px;
    border: none;
  }
`;
