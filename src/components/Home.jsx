import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Picture from "../images/pic_1.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import "../index.css";
import { useTheme } from "./ThmeContext";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "CP Learner",
    "React Developer",
    "DSA Learner",
  ];
  const period = 2000;
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      // name="home"
      // className="w-full h-screen bg-gradient-to-b from-indigo-900 to-black"
      // className="w-full h-screen bg-gradient-to-b from-purple-300 to-blue-400"
      // className="w-full h-screen bg-gradient-to-b from-green-900 to-black"
      // className="w-full h-screen bg-gradient-to-b from-indigo-900 to-black text-white"
      //       className="w-full h-screen bg-gradient-to-b from-ivory-200 to-ivory-400 text-gray-900"
      // className="w-full h-screen bg-gradient-to-b from-blue-900 to-blue-600"
      // className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white"

      name="home"
      className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      {/* Container */}
      <div className="fixed right-4 top-5">
        {" "}
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full ${
            darkMode
              ? "bg-pink-200  text-black" /* Replace bg-cyan-500 with your light theme background color */
              : "bg-gray-100 text-black" /* Replace bg-white and text-black with your dark theme colors */
          }`}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p
            className={`text-pink-400 text-3xl ${
              darkMode ? " " : " text-pink-800"
            }`}
          >
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-white mt-2">
            Rupali Sharma
          </h1>

          <h2 className="text-4xl sm:text-4xl font-bold text-white mt-2">
            {`I'm a `}{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "CP Learner", "React Developer", "DSA Learner" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h2>
          <p
            className={`text-yellow-200 py-4 max-w-[700px] text-2xl  ${
              darkMode ? " " : " text-yellow-400"
            }`}
          >
            "The only limit to our realization of tomorrow will be our doubts of
            today."
          </p>
          <Link
            // to={resume}
            smooth
            duration={500}
            href="https://drive.google.com/file/d/1Y1nSnaCBTOiu0TFLWoygIuGIyt3ew-z4/view"
            className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-red-500 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-700 font-4xl"
          >
            Get Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-1" />
            </span>
          </Link>
        </div>

        {/* For image */}
        <div className="w-96 h-96 md:w-96 md:h-96 flex justify-center items-center">
          <div className="relative w-96 h-96 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-white">
            <img
              src={Picture}
              alt="my Profile"
              className="object-cover object-center w-full h-full rounded-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
