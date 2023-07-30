import React from "react";
import img1 from "../images/port1.png";
// import img1 from "../images/port2.png";
import img2 from "../images/project_2.png";
import img3 from "../images/img3.png";
import "../index.css";
import { useTheme } from "./ThmeContext";

const Work = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
      name="work"
      className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 text-white flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold inline border-b-4 border-pink-700">
            Work
          </h1>
          <p
            className={`py-5 text-2xl text-center ${
              darkMode ? " text-gray-400" : " text-black"
            }`}
          >
            "Discovering My Projects: A Collection of My Coding Endeavors"
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 sm:px-0">
          {/* Grid Item */}
          {/* Project-1 */}
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center">
                Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project-2 */}
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center">
                IISTorage
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rupali-12/HackathonProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rupali-12/HackathonProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project-3 */}
          <div
            style={{ backgroundImage: `url(${img3})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EcommIndia
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
