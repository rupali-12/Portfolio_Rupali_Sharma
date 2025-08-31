import GFG from "../images/gfg2.png";
import Leetcode from "../images/leetcode.png";
import Codechef from "../images/codechef2.png";
import Github from "../images/Github.png";
import CodeStudio from "../images/codingNinjas.jpeg";
import "../index.css";
import { motion } from "framer-motion";

const CodingProfiles = () => {
  return (
    <div
      name="profiles"
      className="w-full h-screen bg-gradient-to-t from-indigo-900 to-black text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-white flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block"
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              My Profiles
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
          </motion.h1>

          <p className="py-3 text-xl md:text-2xl text-center text-gray-400">
            "Unraveling the Code: Exploring My Coding Endeavors"
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 text-[#f6f8ff] font-bold text-sm md:text-base">
          <a href="https://leetcode.com/Rupali_12/">
            <div className="shadow-md shadow-red-400 hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={Leetcode}
                alt="Leetcode icon"
              />
              <p className="my-2 text-white">Leetcode</p>
            </div>
          </a>

          <a href="https://www.codechef.com/users/rupali1771">
            <div className="shadow-md shadow-[#85a5cc] hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={Codechef}
                alt="Codechef icon"
              />
              <p className="my-2 text-white">Codechef</p>
            </div>
          </a>

          <a href="https://auth.geeksforgeeks.org/user/rupalisharma1009/profile">
            <div className="shadow-md shadow-[#a3ff78] hover:scale-110 duration-500">
              <img className="w-16 md:w-20 mx-auto" src={GFG} alt="GFG icon" />
              <p className="my-2 text-white">Geeks For Geeks</p>
            </div>
          </a>

          <a href="https://github.com/rupali-12">
            <div className="shadow-md shadow-[#b4ceee] hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={Github}
                alt="Github icon"
              />
              <p className="my-2 text-white">Github</p>
            </div>
          </a>

          <a href="https://www.codingninjas.com/studio/profile/b6be3faf-e2b8-4ca8-82dd-fcef5f6bec1f">
            <div className="shadow-md shadow-orange-300 hover:scale-110 duration-500">
              <img
                className="w-16 md:w-20 mx-auto"
                src={CodeStudio}
                alt="CodeStudio icon"
              />
              <p className="my-2 text-white">Code Studio</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
