import React, { useEffect, useState, useReducer } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Search from "../components/Search";
import ModeSwitch from "../components/ModeSwitch";
import styled from "styled-components";

const MOVIE_API_URL = "http://www.omdbapi.com/?s=movie&apikey=5274aed9";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "SEARCH_MOVIE_SUCCESS",
          payload: res.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIE_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5274aed9`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: res.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            payload: res.Error,
          });
        }
      });
  };

  const { movies, loading, errorMessage } = state;
  return (
    <AppWarp isClicked={buttonClicked}>
      <ModeSwitch
        isClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <Header text='Movie Search APIs' isClicked={buttonClicked} />
      <Search search={search} isClicked={buttonClicked} />
      <ThisIsP isClicked={buttonClicked}>
        <i>Sharing a few of our favourite movies...</i>
      </ThisIsP>
      <MovieListWrap>
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          movies.map((movie, idx) => (
            <Movie
              key={`${idx}-${movie.Title}`}
              movie={movie}
              imdbid={movie.imdbID}
              isClicked={buttonClicked}
            />
          ))
        )}
      </MovieListWrap>
    </AppWarp>
  );
};

const AppWarp = styled.div`
  text-align: center;
  min-width: 315px;
  background-color: ${(props) => (props.isClicked ? "#2d3436" : "white")};
`;

const ThisIsP = styled.p`
  color: ${(props) => (props.isClicked ? "white" : "black")};
`;

const MovieListWrap = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 5px auto;
  justify-content: center;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  margin: 50px;
  border: 5px solid rgba(39, 174, 96, 0.5);
  border-top-color: rgba(39, 174, 96, 1);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spinning 1s ease-in-out infinite;
  @keyframes spinning {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default withRouter(Home);
