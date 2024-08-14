import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function MovieDetails({ movies, setMovies, series, setSeries }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the item with the matching ID
  const item =
    movies.find((m) => m.id === id) || series.find((s) => s.id === id);

  if (!item) {
    return <div>Movie/Series not found</div>;
  }

  const handleDelete = () => {
    if (movies.some((m) => m.id === id)) {
      // If the item is found in movies, filter it out
      setMovies((prevMovies) => prevMovies.filter((m) => m.id !== id));
    } else if (series.some((s) => s.id === id)) {
      // If the item is found in series, filter it out
      setSeries((prevSeries) => prevSeries.filter((s) => s.id !== id));
    }
    navigate("/");
  };

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

        <div className="mt-4">
          <Link
            to={`/edit/${id}`}
            className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
