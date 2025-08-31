import CPP from "../images/C++.png";
import Java from "../images/java.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import Node from "../images/node.png";
import Reactlogo from "../images/react.png";
import Python from "../images/python.png";
import "../index.css";
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen dark-theme">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-white flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block"
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Skills
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
          </motion.h1>
          <p className="py-3 text-xl md:text-2xl text-center text-gray-400">
            "Embracing the Tech Stack: My Coding Arsenal"
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 text-[#f6f8ff] font-bold text-1xl md:text-xl">
          <div className="shadow-md shadow-[#85a5cc] hover:scale-110 duration-500">
            <img className="w-16 mx-auto md:w-20" src={CPP} alt="CPP icon" />
            <p className="my-2">C++</p>
          </div>
          <div className="shadow-md shadow-red-400 hover:scale-110 duration-500">
            <img className="w-16 mx-auto md:w-20" src={Java} alt="Java icon" />
            <p className="my-2">JAVA</p>
          </div>
          <div className="shadow-md shadow-yellow-400 hover:scale-110 duration-500">
            <img
              className="w-16 mx-auto md:w-20"
              src={Python}
              alt="Python icon"
            />
            <p className="my-2">PYTHON</p>
          </div>
          <div className="shadow-md shadow-orange-400 hover:scale-110 duration-500">
            <img className="w-16 mx-auto md:w-20" src={HTML} alt="HTML icon" />
            <p className="my-2">HTML</p>
          </div>
          <div className="shadow-md shadow-[#85a5cc] hover:scale-110 duration-500">
            <img className="w-16 mx-auto md:w-20" src={CSS} alt="CSS icon" />
            <p className="my-2">CSS</p>
          </div>
          <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500">
            <img
              className="w-16 mx-auto md:w-20"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-2">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-cyan-200 hover:scale-110 duration-500">
            <img
              className="w-16 mx-auto md:w-20"
              src={Reactlogo}
              alt="React icon"
            />
            <p className="my-2">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#a3ff78] hover:scale-110 duration-500">
            <img className="w-16 mx-auto md:w-20" src={Node} alt="Node icon" />
            <p className="my-2">NODE JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
