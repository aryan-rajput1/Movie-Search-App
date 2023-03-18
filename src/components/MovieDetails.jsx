import React from "react";
// import './App.css';

function MovieDetails(props) {
  return (
    <div className="movie-details">
      <h1>{props.selectedMovie.Title}</h1>
      <div>
        <img src={props.selectedMovie.Poster} alt={props.selectedMovie.Title} />
      </div>
      <p>{props.selectedMovie.Plot}</p>
      <p>Rating: {props.selectedMovie.imdbRating}/10</p>
    </div>
  );
}

export default MovieDetails;
