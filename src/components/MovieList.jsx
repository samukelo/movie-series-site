import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <div className="space-y-4">
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
