import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import AddItem from "./pages/AddItem";
import MovieDetails from "./pages/MovieDetails";
import EditItem from "./pages/EditItem";
import Navbar from "./components/navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const addItem = (item, type) => {
    console.log("Item being added:", item);
    console.log("Type:", type);

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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/series" element={<Series series={series} />} />
          <Route path="/add" element={<AddItem addItem={addItem} />} />
          <Route
            path="/details/:id"
            element={<MovieDetails movies={movies} series={series} />}
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
