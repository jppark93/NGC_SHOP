import React, { useState } from "react";
import styled from "styled-components";
import { categori } from "../../data/data";
const SearchSelect = () => {
  const [selectValue, setSelectValue] = useState({ value: "" });

  const selectChange = (e: any) => {
    setSelectValue({ value: e.target.value });
  };
  return (
    <SelectDiv>
      <SelectTag value={selectValue.value} onChange={selectChange}>
        <option>=카테고리선택=</option>
        {categori.map((el: any) => {
          return (
            <option key={el.index} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </SelectTag>
    </SelectDiv>
  );
};
const SelectDiv = styled.div`
  display: block;
  width: 100%;
  height: 29.6px;
  font-size: 13px;

  margin-bottom: 5px;
`;
const SelectTag = styled.select`
  width: 100%;
  height: 100%;
  color: #717171;
`;
export default SearchSelect;
