// import React from "react";
// import CPP from "../images/C++.png";
// import Java from "../images/java.png";
// // import Java from '../images/java2.png';
// // import Java from '../images/java1.png';
// import HTML from "../images/html.png";
// import CSS from "../images/css.png";
// import JavaScript from "../images/javascript.png";
// import Node from "../images/node.png";
// import Reactlogo from "../images/react.png";
// import Python from "../images/python.png";
// import "../index.css";
// import { useTheme } from "../ThmeContext";

// const Skills = () => {
//   const { darkMode, toggleTheme } = useTheme();
//   return (
//     <div
//       name="skills"
//       className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
//     >
//       {/* Container  */}
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
//         <div className="text-white flex flex-col justify-center items-center">
//           <p className="text-5xl font-bold text-white inline border-b-4 border-pink-700">
//             Skills
//           </p>
//           <p
//             className={` py-5 text-2xl text-center ${
//               darkMode ? " text-gray-400" : " text-black"
//             }`}
//           >
//             "Embracing the Tech Stack: My Coding Arsenal"
//           </p>
//         </div>
//         <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#f6f8ff] font-bold text-1xl">
//           <div
//             className={`${
//               darkMode
//                 ? " shadow-md shadow-[#85a5cc] hover:scale-110 duration-500"
//                 : " shadow-md shadow-[#252e3b] hover:scale-110 duration-500"
//             }`}
//           >
//             <img className="w-20 mx-auto" src={CPP} alt="CPP icon" />
//             <p className="my-3">C++</p>
//           </div>
//           <div className="shadow-md shadow-red-400 hover:scale-110 duration-500">
//             <img className="w-20 mx-auto" src={Java} alt="Java icon" />
//             <p className="my-3">JAVA</p>
//           </div>
//           <div className="shadow-md shadow-yellow-400 hover:scale-110 duration-500">
//             <img className="w-20 mx-auto" src={Python} alt="Python icon" />
//             <p className="my-3">PYTHON</p>
//           </div>
//           <div className="shadow-md shadow-orange-400 hover:scale-110 duration-500">
//             <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
//             <p className="my-3">HTML</p>
//           </div>
//           <div
//             className={`${
//               darkMode
//                 ? " shadow-md shadow-[#85a5cc] hover:scale-110 duration-500"
//                 : " shadow-md shadow-[#5f9645] hover:scale-110 duration-500"
//             }`}
//           >
//             <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
//             <p className="my-6">CSS</p>
//           </div>
//           <div className="shadow-md shadow-yellow-300 hover:scale-110 duration-500">
//             <img
//               className="w-20 mx-auto"
//               src={JavaScript}
//               alt="Javascript icon"
//             />
//             <p className="my-6">JAVASCRIPT</p>
//           </div>
//           <div className="shadow-md shadow-cyan-200 hover:scale-110 duration-500">
//             <img className="w-20 mx-auto" src={Reactlogo} alt="React icon" />
//             <p className="my-6">REACT JS</p>
//           </div>
//           <div className="shadow-md shadow-[#a3ff78] hover:scale-110 duration-500">
//             <img className="w-20 mx-auto" src={Node} alt="Node icon" />
//             <p className="my-6">NODE JS</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// *******************************************************************************88
import React from "react";
import CPP from "../images/C++.png";
import Java from "../images/java.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import Node from "../images/node.png";
import Reactlogo from "../images/react.png";
import Python from "../images/python.png";
import "../index.css";
import { useTheme } from "./ThmeContext";

const Skills = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
      name="skills"
      className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-white flex flex-col justify-center items-center">
          <p className="text-4xl md:text-5xl font-bold text-white inline border-b-4 border-pink-700">
            Skills
          </p>
          <p
            className={`py-3 text-xl md:text-2xl text-center ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            "Embracing the Tech Stack: My Coding Arsenal"
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 text-[#f6f8ff] font-bold text-1xl md:text-xl">
          <div
            className={`${
              darkMode
                ? "shadow-md shadow-[#85a5cc] hover:scale-110 duration-500"
                : "shadow-md shadow-[#252e3b] hover:scale-110 duration-500"
            }`}
          >
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
          <div
            className={`${
              darkMode
                ? "shadow-md shadow-[#85a5cc] hover:scale-110 duration-500"
                : "shadow-md shadow-[#5f9645] hover:scale-110 duration-500"
            }`}
          >
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
