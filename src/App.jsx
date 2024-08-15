import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
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
    </Router>
  );
}

export default App;
