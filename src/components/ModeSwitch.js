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
      <ModeState isClicked={isClicked}>
        {isClicked ? "Dark Mode" : "Light Mode"}
      </ModeState>
    </SwitchWrap>
  );
};

const SwitchWrap = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const SwitchBorder = styled.div`
cursor: pointer;
  border: 2px solid green;
  border-radius: 50px;
  margin-top: 30px;
  width: 60px;
  height: 30px;
  position: relative;
  display: flex;
  /* justify-content: ${(props) =>
    props.isClicked ? "flex-end" : "flex-start"}; */
  background-color: ${(props) => (props.isClicked ? "#ffeaa7" : "white")};
`;

const SwitchBtn = styled.div`
  margin: 1px;
  border-radius: 50px;
  background-color: green;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -1px;
  left: ${(props) => (props.isClicked ? 29 : -1)}px;
  transition: all 0.2s ease-in-out;
`;

const ModeState = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 2px;
  color: ${(props) => (props.isClicked ? "white" : "black")};
`;

export default ModeSwitch;
