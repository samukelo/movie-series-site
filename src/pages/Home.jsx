import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import got from "../assets/got.jpg";
import rm from "../assets/rickMorty.png";
import loki from "../assets/loki.jpg";
import hod from "../assets/HoTD.jpg";
import "../App.css";

function Home() {
  return (
    <div>
      <div className="mt-20 mb-20 text-center decoration text-xl">
        LATEST MOVIES
      </div>
      <div>
        <div className="flex flex-wrap justify-center space-x-16 mt-40">
          <div className="flex flex-wrap justify-center space-x-16">
            <Link to="" key="">
              <img
                src={got}
                alt="dummyone"
                className="h-56 w-40 object-container mt-10"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-16">
            <Link to="" key="">
              <img
                src={rm}
                alt="dummyone"
                className="h-56 w-40 object-container mt-10"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-16">
            <Link to="" key="">
              <img
                src={loki}
                alt="dummyone"
                className="h-56 w-40 object-container mt-10"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-16">
            <Link to="" key="">
              <img
                src={hod}
                alt="dummyone"
                className="h-56 w-40 object-container mt-10"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-end items-end">
            <button className="bg-blue-600 rounded-full py-1 px-6 mr-64 mt-5 text-white text-xs">
              <Link to="/movies">More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
