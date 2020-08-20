import React from "react";
import styled from "styled-components";

const Header = ({ text, isClicked }) => {
  return (
    <HeaderWrap isClicked={isClicked}>
      <h2>{text}</h2>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.h2`
  font-size: 50px;
  color: ${(props) => (props.isClicked ? "white" : "black")};
`;

export default Header;
