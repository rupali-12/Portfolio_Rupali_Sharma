import React from "react";
import { useTheme } from "./ThmeContext";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`bg-black text-white py-4 ${
        darkMode ? "text-white" : "text-white"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:text-xl md:mr-8">
          <div className="flex justify-center md:justify-start space-x-3 md:space-x-8">
            <a href="http://wa.me/+916396882689">
              <WhatsAppIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com/ms_rupali__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
              <InstagramIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/rupali-sharma100">
              <LinkedInIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
            </a>
            <a href="https://github.com/rupali-12">
              <GitHubIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
            </a>
          </div>
        </div>
        <p className="text-lg font-semibold mt-4 md:mt-0 md:self-center md:text-center md:ml-8">
          &copy; {new Date().getFullYear()} Rupali Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
