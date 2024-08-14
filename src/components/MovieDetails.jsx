import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies, series }) {
  const { id } = useParams();

  // Find the item with the matching id from either movies or series
  const item =
    movies.find((m) => m.id === id) || series.find((s) => s.id === id);

  if (!item) {
    return <div>Movie/Series not found</div>;
  }

  return (
    <div>
      <Link to="/" className="text-blue-500">
        Back to Home
      </Link>
      <div className="my-4">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full h-64 object-cover mb-4"
          />
        )}
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <p className="mb-2">
          <strong>Description:</strong> {item.description}
        </p>
        <p className="mb-2">
          <strong>Country:</strong> {item.country}
        </p>
        <p className="mb-2">
          <strong>Category:</strong> {item.category}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
