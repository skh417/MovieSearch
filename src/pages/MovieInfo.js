import React from "react";
import styled from "styled-components";

const MovieInfo = (props) => {
  console.log(props.match);
  return <MovieInfoWrap>안녕하세오</MovieInfoWrap>;
};

const MovieInfoWrap = styled.div`
  background-color: rgba(236, 240, 241, 1);
`;

export default MovieInfo;
