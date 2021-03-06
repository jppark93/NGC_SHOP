import React, { useState } from "react";
import styled from "styled-components";
import { categori } from "../../data/data";
const ChildSearchSelect = (props: any) => {
  const selectChange = (e: any) => {
    props.option(e.target.value);
  };
  const Func = () => {
    if (
      props.parentValue === "MAN" ||
      props.parentValue === "WOMAN" ||
      props.parentValue === "KIDS"
    ) {
      return (
        <SelectTag value={props.value} onChange={selectChange}>
          <option>=카테고리선택=</option>
          <option value={props.select.outer}>{props.select.outer}</option>
          <option value={props.select.top}>{props.select.top}</option>
          <option value={props.select.bottom}>{props.select.bottom}</option>
        </SelectTag>
      );
    } else {
      return (
        <SelectTag value="=카테고리선택=">
          <option>=카테고리선택=</option>
        </SelectTag>
      );
    }
  };
  return <SelectDiv>{Func()}</SelectDiv>;
};
const SelectDiv = styled.div`
  display: block;
  width: 90%;
  height: 29.6px;
  font-size: 13px;

  margin-bottom: 5px;
`;
const SelectTag = styled.select`
  width: 100%;
  height: 100%;
  color: #717171;
`;
export default ChildSearchSelect;
