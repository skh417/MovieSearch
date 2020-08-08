import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderWrap>
      <h2>{props.text}</h2>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.h2`
  font-size: 50px;
`;

export default Header;
