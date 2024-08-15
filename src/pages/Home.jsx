import React from "react";
import { Link } from "react-router-dom";

function Home({ movies, series }) {
  return (
    <div>
      <div className="mt-20 mb-20 text-center decoration text-xl">
        LATEST MOVIES
      </div>
      <div className="flex flex-wrap justify-center space-x-16 mt-40">
        <div className="flex flex-wrap justify-center space-x-16">
          <Link to={`/details/${movie.id}`} key="">
            <img
              src={got}
              alt="dummyone"
              className="h-56 w-40 object-container mt-10"
            />
          </Link>
        </div>
      </div>
      {/* use Thia Ontop to add Bottom one */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link to={`/details/${movie.id}`} className="text-blue-500">
              <div key={movie.id} className="border p-4 rounded-lg shadow-lg">
                {movie.thumbnail && (
                  <img
                    src={movie.thumbnail}
                    alt={movie.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{movie.name}</h3>
                <p className="text-gray-700 mb-2">{movie.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={`/movies`}
          className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
        >
          Edit
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {series.map((serie) => (
            <div key={serie.id} className="border p-4 rounded-lg shadow-lg">
              {serie.thumbnail && (
                <img
                  src={serie.thumbnail}
                  alt={serie.name}
                  className="w-full h-48 object-cover mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{serie.name}</h3>
              <p className="text-gray-700 mb-2">{serie.description}</p>
              <Link to={`/details/${serie.id}`} className="text-blue-500">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
