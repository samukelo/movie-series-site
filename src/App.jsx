import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import AddItem from "./pages/AddItem";
import MovieDetails from "./pages/MovieDetails";
import EditItem from "./pages/EditItem";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const addItem = (item, type) => {
    if (type === "movie") {
      setMovies([...movies, { ...item, id: uuidv4() }]);
    } else {
      setSeries([...series, { ...item, id: uuidv4() }]);
    }
  };

  return (
    <Router>
      <section>
        <Navbar />
      </section>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home movies={movies} series={series} />} />
          <Route
            path="/movies"
            element={<Movies movies={movies} setMovies={setMovies} />}
          />
          <Route
            path="/series"
            element={<Series series={series} setSeries={setSeries} />}
          />
          <Route path="/add" element={<AddItem addItem={addItem} />} />
          <Route
            path="/details/:id"
            element={
              <MovieDetails
                movies={movies}
                setMovies={setMovies}
                series={series}
                setSeries={setSeries}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditItem
                movies={movies}
                setMovies={setMovies}
                series={series}
                setSeries={setSeries}
              />
            }
          />
        </Routes>
      </div>
      <section>
        <Footer />
      </section>
    </Router>
  );
}

export default App;

{
  /* <Link to="/" className="text-blue-500">
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
    </div>*/
}
