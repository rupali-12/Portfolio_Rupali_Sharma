import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import "../index.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-6 bg-black text-white">
      <div className="text-4xl font-extrabold relative">
        <span
          className="
      text-transparent bg-clip-text 
      tracking-wider drop-shadow-lg animate-pulse hover:scale-110 
      transition-transform duration-300 cursor-pointer bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
        >
          <span
            className="
        relative inline-block
        after:content-[''] after:absolute after:-bottom-1 after:left-0 
        after:w-full after:h-[3px] 
        after:rounded-full after:scale-x-0 after:origin-left 
        hover:after:scale-x-100 after:transition-transform after:duration-500
        after:bg-gradient-to-r after:from-yellow-300 after:to-red-500"
          >
            R<span className="italic text-yellow-300">Rupali</span>
          </span>
        </span>
      </div>

      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        {["home", "about", "skills", "profiles", "work", "contact"].map(
          (item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          )
        )}
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-20 text-3xl cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`${
          !nav ? "hidden" : "flex"
        } absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800" flex-col justify-center items-center space-y-10 text-3xl font-bold`}
      >
        {["home", "about", "skills", "profiles", "work", "contact"].map(
          (item, index) => (
            <li key={index}>
              <Link
                onClick={handleClick}
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[32%] left-2 z-20">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/rupali-sharma100"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/rupali-12"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B4F8C8]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto:rupalisharma1009@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B9B7BD]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://drive.google.com/file/d/1XUJDMwGXKloDeaOJ4cdwH-bFVZw8IRto/view?usp=sharing"
              download={true}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E43D40]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://instagram.com/ms_rupali____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#98cc82]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="http://wa.me/+91"
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
