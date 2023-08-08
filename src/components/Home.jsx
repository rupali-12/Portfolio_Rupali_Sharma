import React, { useState, useEffect } from "react";
import Picture from "../images/pic_1.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTheme } from "./ThmeContext";
import "../index.css";

const Home = ({ showImage }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Web Developer",
    "CP Learner",
    "React Developer",
    "DSA Learner",
  ];
  const period = 2000;
  const { darkMode, toggleTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

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
      setLoopNum(loopNum + 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      name="home"
      className={`relative w-full min-h-screen ${
        darkMode
          ? "dark-theme text-white"
          : "bg-gradient-to-b from-gray-700 to-blue-400 text-white"
      }`}
    >
      {/* Container */}
      <div className="fixed right-4 top-24 z-20">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full ${
            darkMode
              ? "bg-gradient-to-b from-gray-100 to-blue-600 text-black font-bold"
              : "bg-gradient-to-b from-gray-400 to-indigo-800 text-gray-100 font-bold"
            // darkMode ? "bg-pink-200 text-black" : "bg-gray-100 text-black"
          }`}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center min-h-screen px-4">
        <div className="flex flex-col justify-center w-full md:w-1/2 md:mr-8 mt-8 md:mt-0 md:mb-0">
          <div className="home-content-wrapper">
            <p
              className={`text-pink-400 text-3xl ${
                darkMode ? "" : "text-pink-800"
              }`}
            >
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white mt-2">
              Rupali Sharma
            </h1>
            <h2 className="text-4xl sm:text-4xl font-bold text-white mt-2">
              {`I'm a `}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='["Web Developer", "CP Learner", "React Developer", "DSA Learner"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h2>
            <p
              className={`text-yellow-200 py-4 max-w-[700px] text-2xl ${
                darkMode ? "" : "text-yellow-400"
              }`}
            >
              "The only limit to our realization of tomorrow will be our doubts
              of today."
            </p>
            {/* <Link
              smooth
              duration={500}
              href="https://drive.google.com/file/d/1Y1nSnaCBTOiu0TFLWoygIuGIyt3ew-z4/view"
              // download={true}
              className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-red-500 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-700 font-4xl"
            >
              <a href="https://drive.google.com/file/d/1Y1nSnaCBTOiu0TFLWoygIuGIyt3ew-z4/view">
              Get Resume
              </a>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link> */}
            <a
              smooth
              duration={500}
              href="https://drive.google.com/file/d/1alzzUPK0-bz0xEMPCb84OeJJvx7EBQe4/view?usp=drive_link"
              // download={true}
              target="_blank"
              className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-red-500 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-700 font-4xl"
            >
              Get Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="w-80 h-80 md:w-96 md:h-96 flex justify-center items-center relative z-0 mt-8 md:mt-0">
          <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-white">
            <img
              src={Picture}
              alt="My Profile"
              className={`object-cover object-center w-full h-full rounded-full ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Styles for smaller screens */
          .home-content-wrapper {
            padding-top: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
