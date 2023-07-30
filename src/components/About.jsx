// import React from "react";
// import { useTheme } from "../ThmeContext";
// import "../index.css";
// const About = () => {
//   const { darkMode, toggleTheme } = useTheme();
//   return (
//     <div
//       name="about"
//       className={`w-full h-screen ${
//         darkMode
//           ? "bg-gradient-to-t from-indigo-900 to-black text-white"
//           : // : "bg-gradient-to-t from-purple-400 to-blue-400 text-black"
//             "bg-gradient-to-b from-blue-200 to-blue-500 text-black"
//       }`}
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center h-full">
//         <div className="pb-8 flex justify-center">
//           <p className="text-6xl font-bold text-white border-b-4 border-pink-700">
//             About Me
//           </p>
//         </div>
//         <h2 className="text-yellow-300 text-3xl font-semibold">
//           Grateful for your interest in my profile..!!
//         </h2>
//         <div className="text-gray-300 flex font-bold sm:text-right text-4xl mt-5">
//           <p
//             className={`text-gray-400 py-5 text-center ${
//               darkMode ? " text-white" : " text-gray-800"
//             }`}
//           >
//             Hello, I'm Rupali Sharma
//           </p>
//         </div>
//         <p
//           className={`text-gray-300 text-xl mt-5 leading-7 max-w-lg  ${
//             darkMode ? " text-white" : " text-gray-600"
//           }`}
//         >
//           Final-year Engineering student proficient in C++ and Java, with
//           hands-on experience in full-stack web development using the MERN
//           Stack. Passionate about exploring Data Structures and Algorithms.
//           <br />
//           <br />
//           Outside of my academic pursuits, I enjoy engaging in meaningful
//           discussions and embracing diverse perspectives. I actively participate
//           in seminars and workshops to enhance my skills. And I find joy in
//           reading books and playing badminton in my leisure time."
//         </p>
//         <p className="text-gray-300 text-xl mt-7">
//           Let's connect:
//           <h3 className="text-yellow-300 text-3xl font-bold">
//             rupalisharma1009@gmail.com
//           </h3>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

// ***********************************************************************************************************
import React from "react";
import { useTheme } from "./ThmeContext";
import "../index.css";

const About = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
      name="about"
      className={`w-full h-screen ${
        darkMode
          ? "bg-gradient-to-t from-indigo-900 to-black text-white"
          : "bg-gradient-to-b from-blue-200 to-blue-500 text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl md:text-6xl font-bold text-white border-b-4 border-pink-700">
            About Me
          </p>
        </div>
        <h2 className="text-yellow-300 text-xl md:text-3xl font-semibold">
          Grateful for your interest in my profile..!!
        </h2>
        <div className="text-gray-300 flex font-bold text-xl md:text-4xl mt-5">
          <p
            className={`text-gray-400 py-5 text-center ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Hello, I'm Rupali Sharma
          </p>
        </div>
        <p
          className={`text-gray-300 text-base md:text-xl mt-5 leading-7 max-w-lg ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Final-year Engineering student proficient in C++ and Java, with
          hands-on experience in full-stack web development using the MERN
          Stack. Passionate about exploring Data Structures and Algorithms.
          <br />
          <br />
          Outside of my academic pursuits, I enjoy engaging in meaningful
          discussions and embracing diverse perspectives. I actively participate
          in seminars and workshops to enhance my skills. And I find joy in
          reading books and playing badminton in my leisure time."
        </p>
        <p className="text-gray-300 text-base md:text-xl mt-7">
          Let's connect:
          <h3 className="text-yellow-300 text-xl md:text-3xl font-bold">
            rupalisharma1009@gmail.com
          </h3>
        </p>
      </div>
    </div>
  );
};

export default About;
