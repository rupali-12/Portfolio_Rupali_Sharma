import { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "../index.css";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Full Stack Developer",
    "CP Learner",
    "React Developer",
    "DSA Enthusiast",
    "Vue Developer",
  ];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prev) => prev / 2);

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

  return (
    <div
      name="home"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 dark-theme text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      <div className="max-w-screen-lg w-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-pink-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide break-words"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight md:leading-[1.1] break-words"
        >
          Rupali Sharma
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-300 tracking-wide break-words"
        >
          {`I'm a `}
          <span className="text-yellow-400 font-semibold">{text}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 break-words max-w-[90%]"
        >
          "The only limit to our realization of tomorrow will be our doubts of
          today."
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          href="https://drive.google.com/file/d/1Gj1UHNoNk--nnxmBY8KNUX4o6J9YWjoM/view?usp=drive_link"
          target="_blank"
          className="mt-4 sm:mt-6 inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-600 to-red-500 hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-800 transition-transform transform hover:scale-110 max-w-full text-center"
        >
          Get Resume
          <HiArrowNarrowRight className="ml-2 transition-transform group-hover:rotate-90" />
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
