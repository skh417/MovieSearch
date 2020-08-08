import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Search from "../components/Search";
import styled from "styled-components";

const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=5274aed9";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.Search);
        setLoading(false);
        console.log("ok!!", res);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "True") {
          setMovies(res.Search);
          setLoading(false);
        } else {
          setErrorMessage(res.Error);
          setLoading(false);
        }
      });
  };
  return (
    <AppWarp>
      <Header text='Movie Search APIs' />
      <Search search={search} />
      <p>
        <i>Sharing a few of our favourite movies...</i>
      </p>
      <MovieListWrap>
        {loading && !errorMessage ? (
          <Loading></Loading>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          movies.map((movie, idx) => (
            <Movie key={`${idx}-${movie.Title}`} movie={movie} />
          ))
        )}
      </MovieListWrap>
    </AppWarp>
  );
};

const AppWarp = styled.div`
  text-align: center;
`;

const MovieListWrap = styled.div`
  display: flex;
  margin: 5px 340px;
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

export default App;
