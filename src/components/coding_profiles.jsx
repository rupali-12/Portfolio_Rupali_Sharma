import React from "react";
import GFG from "../images/gfg2.png";
import Leetcode from "../images/leetcode.png";
import Codechef from "../images/codechef2.png";
import Github from "../images/Github.png";
import CodeStudio from "../images/codingNinjas.jpeg";
import { useTheme } from "./ThmeContext";
import "../index.css";

const CodingProfiles = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
      name="profiles"
      className={`w-full h-screen ${
        darkMode
          ? "bg-gradient-to-t from-indigo-900 to-black text-white"
          : "bg-gradient-to-t from-black to-blue-500 text-white"
        // : "bg-gradient-to-t from-blue-200 to-blue-500"
      }`}
    >
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-white flex flex-col justify-center items-center">
          <p className="text-4xl md:text-5xl font-bold text-white inline border-b-4 border-pink-700">
            My Profiles
          </p>
          <p
            className={`py-3 text-xl md:text-2xl text-center ${
              darkMode ? "text-gray-400" : "text-white"
            }`}
          >
            "Unraveling the Code: Exploring My Coding Endeavors"
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 text-[#f6f8ff] font-bold text-sm md:text-base">
          <a href="https://leetcode.com/Rupali_12/">
            {" "}
            <div className="shadow-md shadow-red-400 hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={Leetcode}
                alt="Leetcode icon"
              />
              <p className={`my-2 ${darkMode ? "text-white" : "text-black"}`}>
                Leetcode
              </p>
            </div>
          </a>

          <a href="https://www.codechef.com/users/rupali1771">
            <div
              className={`${
                darkMode
                  ? "shadow-md shadow-[#85a5cc] hover:scale-110 duration-500"
                  : "shadow-md shadow-[#252e3b] hover:scale-110 duration-500"
              }`}
            >
              <img
                className="w-16 md:w-20 mx-auto"
                src={Codechef}
                alt="Codechef icon"
              />
              <p className={`my-2 ${darkMode ? "text-white" : "text-black"}`}>
                Codechef
              </p>
            </div>
          </a>

          <a href="https://auth.geeksforgeeks.org/user/rupalisharma1009/profile">
            <div className="shadow-md shadow-[#a3ff78] hover:scale-110 duration-500">
              <img className="w-16 md:w-20 mx-auto" src={GFG} alt="GFG icon" />
              <p className={`my-2 ${darkMode ? "text-white" : "text-black"}`}>
                Geeks For Geeks
              </p>
            </div>
          </a>
          <a href="https://github.com/rupali-12">
            <div className="shadow-md shadow-[#b4ceee] hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={Github}
                alt="Github icon"
              />
              <p className={`my-2 ${darkMode ? "text-white" : "text-black"}`}>
                Github
              </p>
            </div>
          </a>
          <a href="https://www.codingninjas.com/studio/profile/b6be3faf-e2b8-4ca8-82dd-fcef5f6bec1f">
            <div className="shadow-md shadow-orange-300 hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={CodeStudio}
                alt="CodeStudio icon"
              />
              <p className={`my-2 ${darkMode ? "text-white" : "text-black"}`}>
                Code Studio
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
