import React from "react";
import styled from "styled-components";
import MenuImg from "../../Images/menu.png";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <MenuBlock>
      <MenuCategory src={MenuImg}></MenuCategory>

      <MenuList>
        <MenuItem>
          <span>NEW ARRIVAL</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>

        <MenuItem>
          <span>MAN</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>WOMAN</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>KIDS</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>BAG</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>HEAD WEAR</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>FOOT WEAR</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>SKIN CARE</span>
          <ul>
            <li>HOT SUMMER</li>
            <li>20SS APPAREL</li>
          </ul>
        </MenuItem>
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
  align-items: center;
  justify-content: center;
  margin-left: 70px;
  width: 99%;
  height: 51px;
`;
const MenuItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  height: 30px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  border-right: 1px solid #333;
  span {
    :hover {
      color: #ffdb00;
    }
  }
  ul {
    display: block;
    position: absolute;
    top: 40px;
    width: 100%;
    background-color: #111111;
    opacity: 0.8;
    z-index: 100;

    li {
      padding: 5px 10px 7px 19px;
      font-size: 12px;
      color: #e7e7e7;
      :hover {
        background-color: gray;
      }
    }
  }
`;
