import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieInfo = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  const DETAIL_URL = `http://www.omdbapi.com/?i=${props.match.params.id}&apikey=5274aed9`;
  console.log("movieDetail-->", movieDetail);
  useEffect(() => {
    fetch(DETAIL_URL)
      .then((res) => res.json())
      .then((res) => setMovieDetail(res));
  }, [DETAIL_URL]);
  return (
    <MovieInfoWrap>
      <MovieInfoHeader>{movieDetail.Title}</MovieInfoHeader>
      <MainContainer>
        <PosterContainer>
          <PosterImg alt='' src={movieDetail.Poster} />
        </PosterContainer>
        <MovieDetailContainer>
          <MovieTitleP>{`< ${movieDetail.Title} >`}</MovieTitleP>
          {movieDetail.Ratings && <div>{movieDetail.Ratings[0].Value}</div>}
        </MovieDetailContainer>
      </MainContainer>
      <ButtonContainer>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Homebutton>Go back</Homebutton>
        </Link>
      </ButtonContainer>
    </MovieInfoWrap>
  );
};

const MovieInfoWrap = styled.div`
  margin: 0 auto;
`;

const MovieInfoHeader = styled.h2`
  text-align: center;
`;

const MainContainer = styled.section`
  display: flex;
  margin: 100px;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 50px;
`;

const PosterImg = styled.img`
  width: 400px;
  box-shadow: 3px 3px 3px rgba(127, 140, 141, 1);
`;

const MovieDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MovieTitleP = styled.p`
  margin: 0 0 20px 0;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Homebutton = styled.div`
  cursor: pointer;
  display: inline-block;
  color: black;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.5s ease;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
    background-color: rgba(39, 174, 96, 1);
    color: white;
  }
`;

export default MovieInfo;
