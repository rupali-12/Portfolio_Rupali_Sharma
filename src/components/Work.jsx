import img1 from "../images/portfolio.png";
import img2 from "../images/project_2.png";
import img3 from "../images/img3.png";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      name: "Portfolio",
      img: img1,
      demoLink: "/",
      codeLink: "https://github.com/rupali-12/Portfolio_Rupali_Sharma",
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
      demoLink: "https://github.com/rupali-12/EcommIndia",
      codeLink: "https://github.com/rupali-12/EcommIndia",
    },
  ];

  return (
    <div
      name="work"
      className={`w-full min-h-screen  bg-gradient-to-b from-indigo-900 to-black pt-20`}
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-white flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block"
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Work
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
          </motion.h1>
          <p className="py-3 text-xl md:text-2xl text-center text-gray-400">
            "Discovering My Projects: A Collection of My Coding Endeavors"
          </p>
        </div>

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
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-gray-600 text-white hover:bg-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
