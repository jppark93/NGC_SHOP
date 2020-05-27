import React, { useState } from "react";
import styled from "styled-components";
import MenuImg from "../../Images/menu.png";
import MenuModal from "../MenuModal";
import close from "../../Images/close.png";
import { Link, withRouter } from "react-router-dom";
import { shopDataRequest } from "../../data/data";
const Menu = (props: any) => {
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const openClose = () => {
    if (modal === false) {
      return <MenuCategory src={MenuImg} onClick={openModal} />;
    } else {
      return <MenuCategory src={close} onClick={closeModal} />;
    }
  };
  const goShop = (e: any) => {
    /*   props.history.push(`/shop/${e}`); */
  };
  return (
    <MenuBlock>
      {openClose()}

      <MenuList>
        <MenuItem>
          <span>MAN</span>
          <ul>
            <li onClick={() => goShop("")}>OUTER</li>
            <li>TOP</li>
            <li>BOTTOM</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>WOMAN</span>
          <ul>
            <li>OUTER</li>
            <li>TOP</li>
            <li>BOTTOM</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>KIDS</span>
          <ul>
            <li>OUTER</li>
            <li>TOP</li>
            <li>BOTTOM</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>BAG</span>
          <ul>
            <li>백팩</li>
            <li>도트백</li>
            <li>서브백</li>
            <li>워터백</li>
            <li>멀티백</li>
            <li>ACC</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>HEAD WEAR</span>
          <ul>
            <li>CAP</li>
            <li>HAT</li>
            <li>BEANIE</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>FOOT WEAR</span>
          <ul>
            <li>스니커즈</li>
            <li>슬리퍼</li>
            <li>시즌아이템</li>
            <li>SOCKS</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>SKIN CARE</span>
          <ul>
            <li>SKIN CARE</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>SUITCASE</span>
          <ul>
            <li>케리어</li>
            <li>케리어 세트</li>
            <li>기내용</li>
            <li>화물용</li>
            <li>액세서리</li>
          </ul>
        </MenuItem>
        <MenuItem>
          <span>CAMPING</span>
          <ul>
            <li>텐트</li>
            <li>타프</li>
            <li>테이블&의자</li>
            <li>코펠/주방</li>
            <li>액세서리</li>
          </ul>
        </MenuItem>
      </MenuList>
      <MenuModal isOpen={modal} />
    </MenuBlock>
  );
};

export default withRouter(Menu);

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
  margin-left: 10%;
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
  width: 10%;
  height: 100%;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  border-right: 1px solid #333;
  :first-child {
    border-left: 1px solid #333;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    :hover {
      color: #ffdb00;
    }
  }
  :hover ul {
    display: block;
  }
  ul {
    display: none;
    position: absolute;
    top: 50px;
    width: 100%;
    background-color: #111111;
    opacity: 0.8;
    z-index: 200;

    li {
      display: block;
      padding: 5px 10px 7px 19px;
      font-size: 12px;
      color: #e7e7e7;

      :hover {
        background-color: gray;
        color: white;
      }
    }
  }
`;
