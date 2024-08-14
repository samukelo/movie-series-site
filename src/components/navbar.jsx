"use client";
import { Link } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";

const navigation = [
  { name: "Movies", href: "../../Movies" },
  { name: "Series", href: "../../Series" },
];

function Navbar() {
  return (
    <>
      <div className="top-section">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-8 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <Link to="../" className="linkcolor" id>
                <h1 className="Logo">
                  Anime <span>Zone</span>
                </h1>
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="../movies" className="linkcolor" id>
                Movies
              </Link>
              <Link to="../series" className="linkcolor" id>
                Series
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <span className="subbtn"> Subscribe </span>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
