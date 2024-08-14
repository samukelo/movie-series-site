import React from "react";
import MovieItem from "./MovieItem";

function Movies({ movies }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="space-y-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
