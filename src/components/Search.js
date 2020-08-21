import React, { useState } from "react";
import styled from "styled-components";

const Search = ({ search, isClicked }) => {
  const [searchValue, setSearchValue] = useState("");
  const resetInputField = () => {
    setSearchValue("");
  };
  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className='search'>
      <SearchBox
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type='text'
        isClicked={isClicked}
      />
      <SubmitInput onClick={callSearchFunction} type='submit' value='SEARCH' />
    </form>
  );
};

const SearchBox = styled.input`
  min-width: 300px;
  height: 30px;
  border: 2px solid green;
  border-radius: 3px;
  outline: none;
  background-color: ${(props) => (props.isClicked ? "#2d3436" : "white")};
  color: ${(props) => (props.isClicked ? "white" : "black")};
`;

const SubmitInput = styled.input`
  margin-left: 10px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 700;
  height: 32px;
  border: 2px solid green;
  background-color: green;
  border-radius: 4px;
`;

export default Search;
