import React from "react";
import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";

function Movies({ movies }) {
  return (
    <div>
      <div className="flex flex-wrap justify-end items-end">
        <button className="bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs">
          <Link to="/add">ADD</Link>
        </button>
      </div>
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
