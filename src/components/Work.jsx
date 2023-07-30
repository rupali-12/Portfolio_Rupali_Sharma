// // import React from "react";
// // import img1 from "../images/port1.png";
// // // import img1 from "../images/port2.png";
// // import img2 from "../images/project_2.png";
// // import img3 from "../images/img3.png";
// // import "../index.css";
// // import { useTheme } from "../ThmeContext";

// // const Work = () => {
// //   const { darkMode, toggleTheme } = useTheme();
// //   return (
// //     <div
// //       name="work"
// //       className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
// //     >
// //       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
// //         <div className="pb-8 text-white flex flex-col justify-center items-center">
// //           <h1 className="text-5xl font-bold inline border-b-4 border-pink-700">
// //             Work
// //           </h1>
// //           <p
// //             className={`py-5 text-2xl text-center ${
// //               darkMode ? " text-gray-400" : " text-black"
// //             }`}
// //           >
// //             "Discovering My Projects: A Collection of My Coding Endeavors"
// //           </p>
// //         </div>

// //         {/* Container */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 sm:px-0">
// //           {/* Grid Item */}
// //           {/* Project-1 */}
// //           <div
// //             style={{ backgroundImage: `url(${img1})` }}
// //             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
// //           >
// //             {/* Hover effect */}
// //             <div className="opacity-0 group-hover:opacity-100">
// //               <span className="text-2xl font-bold text-white tracking-wider flex justify-center">
// //                 Portfolio
// //               </span>
// //               <div className="pt-8 text-center">
// //                 <a href="/">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Demo
// //                   </button>
// //                 </a>
// //                 <a href="/">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Code
// //                   </button>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Project-2 */}
// //           <div
// //             style={{ backgroundImage: `url(${img2})` }}
// //             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
// //           >
// //             {/* Hover effect */}
// //             <div className="opacity-0 group-hover:opacity-100">
// //               <span className="text-2xl font-bold text-white tracking-wider flex justify-center">
// //                 IISTorage
// //               </span>
// //               <div className="pt-8 text-center">
// //                 <a href="https://github.com/rupali-12/HackathonProject">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Demo
// //                   </button>
// //                 </a>
// //                 <a href="https://github.com/rupali-12/HackathonProject">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Code
// //                   </button>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Project-3 */}
// //           <div
// //             style={{ backgroundImage: `url(${img3})` }}
// //             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
// //           >
// //             {/* Hover effect */}
// //             <div className="opacity-0 group-hover:opacity-100">
// //               <span className="text-2xl font-bold text-white tracking-wider">
// //                 EcommIndia
// //               </span>
// //               <div className="pt-8 text-center">
// //                 <a href="/">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Demo
// //                   </button>
// //                 </a>
// //                 <a href="/">
// //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
// //                     Code
// //                   </button>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Work;

// // ******************************************************************************************88
// import React from "react";
// import img1 from "../images/port2.png";
// import img2 from "../images/project_2.png";
// import img3 from "../images/img3.png";
// import "../index.css";
// import { useTheme } from "../ThmeContext";

// const Work = () => {
//   const { darkMode, toggleTheme } = useTheme();
//   return (
//     <div
//       name="work"
//       className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
//         <div className="pb-8 text-white flex flex-col justify-center items-center">
//           <h1 className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-700">
//             Work
//           </h1>
//           <p
//             className={`py-3 text-xl md:text-2xl text-center ${
//               darkMode ? "text-gray-400" : "text-black"
//             }`}
//           >
//             "Discovering My Projects: A Collection of My Coding Endeavors"
//           </p>
//         </div>

//         {/* Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 sm:px-0">
//           {/* Grid Item */}
//           {/* Project-1 */}
//           <div
//             style={{ backgroundImage: `url(${img1})` }}
//             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[300px]"
//           >
//             {/* Hover effect */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-lg md:text-2xl font-bold text-white tracking-wider flex justify-center">
//                 Portfolio
//               </span>
//               <div className="pt-6 md:pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Project-2 */}
//           <div
//             style={{ backgroundImage: `url(${img2})` }}
//             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[300px]"
//           >
//             {/* Hover effect */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-lg md:text-2xl font-bold text-white tracking-wider flex justify-center">
//                 IISTorage
//               </span>
//               <div className="pt-6 md:pt-8 text-center">
//                 <a href="https://github.com/rupali-12/HackathonProject">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="https://github.com/rupali-12/HackathonProject">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Project-3 */}
//           <div
//             style={{ backgroundImage: `url(${img3})` }}
//             className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[300px]"
//           >
//             {/* Hover effect */}
//             <div className="opacity-0 group-hover:opacity-100">
//               <span className="text-lg md:text-2xl font-bold text-white tracking-wider">
//                 EcommIndia
//               </span>
//               <div className="pt-6 md:pt-8 text-center">
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Demo
//                   </button>
//                 </a>
//                 <a href="/">
//                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// ********************************************************************************************************
// ********************************************************************************************************
// *******************************************************************************************************
// ******************************************************************************************
import React from "react";
import img1 from "../images/port2.png";
import img2 from "../images/project_2.png";
import img3 from "../images/img3.png";
import "../index.css";
import { useTheme } from "./ThmeContext";

const Work = () => {
  const { darkMode, toggleTheme } = useTheme();

  const projects = [
    {
      name: "Portfolio",
      img: img1,
      demoLink: "/",
      codeLink: "/",
    },
    {
      name: "IISTorage",
      img: img2,
      demoLink: "https://github.com/rupali-12/HackathonProject",
      codeLink: "https://github.com/rupali-12/HackathonProject",
    },
    {
      name: "EcommIndia",
      img: img3,
      demoLink: "/",
      codeLink: "/",
    },
  ];

  return (
    <div
      name="work"
      className={`w-full h-screen ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="max-w-screen-lg mx-auto p-4 w-full h-full">
        <div className="pb-8 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold inline border-b-4 border-pink-700">
            Work
          </h1>
          <p
            className={`py-3 text-xl md:text-2xl text-center ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            "Discovering My Projects: A Collection of My Coding Endeavors"
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md shadow-yellow-400 hover:scale-150 duration-500 rounded-lg p-4"
            >
              <div
                style={{ backgroundImage: `url(${project.img})` }}
                className="bg-cover bg-center rounded-md h-48 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <div className="flex justify-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <button className="rounded-lg px-4 py-2 m-2 bg-blue-500 text-white font-bold"> */}
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-600 text-white hover:bg-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <button className="rounded-lg px-4 py-2 m-2 bg-gray-700 text-white font-bold">
                    Code
                  </button> */}
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-600 text-white hover:bg-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
