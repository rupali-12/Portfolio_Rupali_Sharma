// import React from "react";
// import { useTheme } from "./ThmeContext";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

// const Footer = () => {
//   const { darkMode } = useTheme();

//   return (
//     <footer
//       className={`bg-black text-white py-6 ${
//         darkMode ? "text-white" : "text-white"
//       }`}
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <p className="text-lg font-semibold mb-4 md:mb-0 md:text-xl md:mr-8">
//           &copy; {new Date().getFullYear()} Rupali Sharma. All rights reserved.
//         </p>
//         <div className="flex space-x-4">
//           <a href="https://web.whatsapp.com/">
//             <WhatsAppIcon className="text-white text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://instagram.com/ms_rupali__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
//             <InstagramIcon className="text-white text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://www.linkedin.com/in/rupali-sharma100">
//             <LinkedInIcon className="text-white text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://github.com/rupali-12">
//             <GitHubIcon className="text-white text-xl hover:text-gray-400" />
//           </a>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { useTheme } from "./ThmeContext";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

// const Footer = () => {
//   const { darkMode } = useTheme();

//   return (
//     <footer
//       className={`bg-black text-white py-6 ${
//         darkMode ? "text-white" : "text-white"
//       }`}
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="flex justify-center md:justify-start space-x-4 md:space-x-8">
//           <a href="https://web.whatsapp.com/">
//             <WhatsAppIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://instagram.com/ms_rupali__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
//             <InstagramIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://www.linkedin.com/in/rupali-sharma100">
//             <LinkedInIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
//           </a>
//           <a href="https://github.com/rupali-12">
//             <GitHubIcon className="text-white text-3xl md:text-xl hover:text-gray-400" />
//           </a>
//         </div>
//         <p className="text-lg font-semibold mt-4 md:mt-0 md:text-xl md:ml-8 md:self-center ">
//           &copy; {new Date().getFullYear()} Rupali Sharma. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { useTheme } from "./ThmeContext";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`bg-black text-white py-6 ${
        darkMode ? "text-white" : "text-white"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:text-xl md:mr-8">
          <div className="flex justify-center md:justify-start space-x-3 md:space-x-8">
            <a href="https://web.whatsapp.com/">
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
