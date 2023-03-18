import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [state, setState] = useState({
    movies: [],
    selectedMovie: null
  });

  const search = (searchValue) => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=5b7f79b4`)
      .then((response) => {
        if (response.data.Search) {
          setState((prevState) => {
            return { ...prevState, movies: response.data.Search };
          });
        } else {
          setState((prevState) => {
            return { ...prevState, movies: [] };
          });
        }
      });
  };

  const onMovieSelect = (movie) => {
    axios
      .get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=5b7f79b4`)
      .then((response) => {
        setState((prevState) => {
          return { ...prevState, selectedMovie: response.data };
        });
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <SearchBar search={search} />
        <MovieList movies={state.movies} onMovieSelect={onMovieSelect} />
        {state.selectedMovie && (
          <MovieDetails selectedMovie={state.selectedMovie} />
        )}
      </main>
    </div>
  );
}

export default App;
