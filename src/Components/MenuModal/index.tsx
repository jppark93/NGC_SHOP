import React from "react";
import styled from "styled-components";
type Bool = {
  isOpen: boolean;
};
const MenuModal = ({ isOpen }: Bool) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <ModalDiv>모달 시발</ModalDiv>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};
const ModalDiv = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 500px;
  border: 1px solid pink;
  background-color: white;
  z-index: 99;
`;
export default MenuModal;
