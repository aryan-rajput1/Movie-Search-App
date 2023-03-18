import React from "react";
// import '/.App.css';

function MovieList(props) {
  const movieClicked = (movie) => {
    props.onMovieSelect(movie);
  };

  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div className="movie" key={index} onClick={() => movieClicked(movie)}>
          <h2>{movie.Title}</h2>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <p>({movie.Year})</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
