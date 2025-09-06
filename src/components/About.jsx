import { motion } from "framer-motion";
import "../index.css";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-t from-indigo-900 to-black text-white relative z-0"
    >
      <div className="max-w-screen-lg w-full text-center relative z-0">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 relative inline-block"
        >
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            About Me
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="py-2 sm:py-3 text-base sm:text-xl md:text-2xl text-center text-gray-400 px-2 sm:px-0 break-words"
        >
          "Grateful for your interest in my profile..!!"
        </motion.h2>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="p-4 sm:p-6 md:p-10 rounded-2xl shadow-2xl backdrop-blur-md border max-w-2xl mx-auto bg-white/10 border-gray-700 relative z-0"
        >
          <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed text-gray-200 break-words">
            Hello, I'm{" "}
            <span className="font-bold text-yellow-300">Rupali Sharma</span>, a
            Full Stack Developer skilled in MERN, Vue.js, and .NET, with
            experience in SQL, MongoDB, and GraphQL. Passionate about
            problem-solving through Data Structures and Algorithms.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 break-words">
            Outside of academics, I enjoy engaging in meaningful discussions,
            participating in seminars and workshops, and embracing diverse
            perspectives. I find joy in reading books and playing badminton in
            my leisure time.
          </p>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold break-words">
              Let's connect:
            </p>
            <h3 className="text-sm sm:text-xl md:text-3xl font-bold mt-1 sm:mt-2 text-gradient bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent break-words">
              rupalisharma1009@gmail.com
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
