import React, { useState } from "react";
import Logo from "../images/R.png";
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
import { useTheme } from "./ThmeContext";
import "../index.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`fixed w-full h-20 flex font-bold justify-between items-center px-4 bg-[black] text-gray-100 z-20`}
    >
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "150px", height: "80px" }}
        ></img>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex text-[22px] font-'Mukta' ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="profiles" smooth={true} duration={500}>
            CodingProfiles
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : darkMode
            ? "bg-[#0a192f] absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-blue-200 to-blue-500 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
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
              href="https://drive.google.com/file/d/1P4MIrEEIMmjW0wk9fhEo1eXvPfwcVnOy/view?usp=drive_link"
              download={true}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E43D40]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://instagram.com/ms_rupali__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#98cc82]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="http://wa.me/+916396882689"
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
