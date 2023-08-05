import React from "react";
import { useTheme } from "./ThmeContext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`bg-gray-900 text-white py-4 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-md font-medium">
          &copy; {new Date().getFullYear()} Rupali Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
