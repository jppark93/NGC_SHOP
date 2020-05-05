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
          <ModalDiv>
            <ul>
              <li>
                <div>
                  <ul></ul>
                </div>
              </li>
            </ul>
          </ModalDiv>
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
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: -30px 0px 0px 0px;
    li {
      display: block;
    }
  }
`;
export default MenuModal;
