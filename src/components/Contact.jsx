// import React from "react";
// import "../index.css";
// import { useTheme } from "./ThmeContext";

// const Contact = () => {
//   const { darkMode, toggleTheme } = useTheme();
//   return (
//     <div
//       name="contact"
//       className={`w-full h-screen lg:h-full p-4 k flex justify-center items-center ${
//         darkMode
//           ? "bg-gradient-to-t from-indigo-900 to-black text-white"
//           : "bg-gradient-to-b from-blue-200 to-blue-500 text-black"
//       }`}
//     >
//       <form
//         method="POST"
//         action="https://getform.io/f/abc4ee1a-5b41-42b4-93eb-3a513743a636"
//         className="flex flex-col max-w-[500px] w-full justify-center"
//       >
//         <div className="pb-8 flex flex-col justify-center items-center">
//           <p className="text-4xl md:text-5xl font-bold text-white inline border-b-4 border-pink-700">
//             Contact
//           </p>
//           <p
//             className={`py-3 text-xl md:text-2xl text-center ${
//               darkMode ? "text-gray-400" : "text-black"
//             }`}
//           >
//             Submit the form below or shoot me an email at{" "}
//             <span className="text-[#FFFF66] text-xl font-bold">
//               rupalisharma1009@gmail.com
//             </span>
//           </p>
//         </div>
//         {/* We need to add name property  this is important for getform.io to work  */}
//         <input
//           className="p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
//           type="text"
//           placeholder="Name"
//           name="name"
//         />
//         <input
//           className="my-4 p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
//           type="email"
//           placeholder="Email"
//           name="email"
//         />
//         <textarea
//           className="p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
//           name="message"
//           rows="6"
//           placeholder="Message"
//         ></textarea>
//         <button
//           className="text-white border-2 border-cyan-400 hover:bg-gradient-to-r from-cyan-500 to-blue-900 rounded-md px-4 py-3 my-8 mx-auto flex items-center text-xl md:text-2xl focus:outline-none"
//           type="submit"
//         >
//           Let's Connect
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// *****************************************************************************************************************************
import React from "react";
import { useTheme } from "./ThmeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div
      name="contact"
      className={`w-full h-screen lg:h-full p-4 k flex justify-center items-center ${
        darkMode
          ? "bg-gradient-to-t from-indigo-900 to-black text-white"
          : "bg-gradient-to-t from-black to-blue-500 text-white"
        // : "bg-gradient-to-t from-blue-200 to-blue-500 text-black"
      } pt-20`}
    >
      <form
        method="POST"
        action="https://getform.io/f/abc4ee1a-5b41-42b4-93eb-3a513743a636"
        className="flex flex-col max-w-[500px] w-full justify-center"
      >
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl md:text-5xl font-bold text-white inline border-b-4 border-pink-700">
            Contact
          </p>
          <p
            className={`py-3 text-xl md:text-2xl text-center ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            Submit the form below or shoot me an email at{" "}
            <span className="text-[#FFFF66] text-xl font-bold">
              rupalisharma1009@gmail.com
            </span>
          </p>
        </div>

        <input
          className="p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#050609] rounded-md text-white placeholder-gray-500 text-xl md:text-2xl focus:outline-none"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 border-cyan-400 hover:bg-gradient-to-r from-cyan-500 to-blue-900 rounded-md px-4 py-3 my-8 mx-auto flex items-center text-xl md:text-2xl focus:outline-none"
          type="submit"
        >
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
