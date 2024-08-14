import React from "react";
import MovieItem from "./MovieItem";

function Series({ series }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Series</h1>
      <div className="space-y-4">
        {series.map((serie) => (
          <MovieItem key={serie.id} movie={serie} />
        ))}
      </div>
    </div>
  );
}

export default Series;
