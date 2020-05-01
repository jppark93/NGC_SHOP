import React from "react";
import styled from "styled-components";
import MenuImg from "../../Images/menu.png";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <MenuBlock>
      <MenuCategory src={MenuImg}></MenuCategory>

      <MenuList>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <MenuItem>NEW ARRIVAL</MenuItem>
        </Link>
        <MenuItem>MAN</MenuItem>
        <MenuItem>WOMAN</MenuItem>
        <MenuItem>KIDS</MenuItem>
        <MenuItem>BAG</MenuItem>
        <MenuItem>HEAD WEAR</MenuItem>
        <MenuItem>FOOT WEAR</MenuItem>
        <MenuItem>SKIN CARE</MenuItem>
      </MenuList>
    </MenuBlock>
  );
};

export default Menu;

const MenuBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 51px;
  background-color: #111111;
`;
const MenuCategory = styled.img`
  display: flex;
  margin-left: 35px;
  background-color: #333;
  cursor: pointer;
`;
const MenuList = styled.ul`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  width: 99%;
  height: 51px;
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  height: 30px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  border-right: 1px solid #333;

  :hover {
    color: yellow;
  }
`;
