import React from "react";
import styled from "styled-components";

const ModeSwitch = ({ isClicked, setButtonClicked }) => {
  const clickSwitch = () => {
    setButtonClicked(!isClicked);
  };

  return (
    <SwitchWrap>
      <SwitchBorder onClick={clickSwitch} isClicked={isClicked}>
        <SwitchBtn isClicked={isClicked} />
      </SwitchBorder>
    </SwitchWrap>
  );
};

const SwitchWrap = styled.div`
  /* border: 2px solid green; */
  display: flex;
  cursor: pointer;
`;

const SwitchBorder = styled.div`
  border: 2px solid black;
  border-radius: 50px;
  margin: 30px;
  width: 70px;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.isClicked ? "flex-end" : "flex-false")};
  background-color: ${(props) => (props.isClicked ? "yellow" : "white")};
`;

const SwitchBtn = styled.div`
  margin: 1px;
  border-radius: 50%;
  background-color: black;
  width: 30px;
  height: 30px;
`;

export default ModeSwitch;
