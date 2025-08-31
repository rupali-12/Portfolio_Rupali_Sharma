import { motion } from "framer-motion";

const Contact = () => {

  return (
    <div
      name="contact"
      className="w-full h-screen lg:h-full p-4 k flex justify-center items-center bg-gradient-to-t from-indigo-900 to-black text-white pt-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/abc4ee1a-5b41-42b4-93eb-3a513743a636"
        className="flex flex-col max-w-[500px] w-full justify-center"
      >
        <div className="pb-8 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-3 relative inline-block"
          >
            <span
              className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
            >
              Contact Me
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
          </motion.h1>
          <p
            className="py-3 text-xl md:text-2xl text-center text-gray-400"
          >
            Submit the form below or shoot me an email at{" "}
            <span className="text-[#FFFF66] text-xl font-bold">
              <a href="mailto:rupalisharma1009@gmail.com">
                rupalisharma1009@gmail.com
              </a>
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
