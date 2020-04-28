import styled from "styled-components";
import React from "react";

const Slide = (props: any) => {
  return <IMG src={props.img} alt="d" />;
};
const IMG = styled.img`
  width: 100%;
  height: 700px;
`;
export default Slide;
