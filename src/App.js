import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CodingProfiles from "./components/coding_profiles";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <CodingProfiles />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// for Tailwind >>>>>>>>
//1.  npm install -D tailwindcss
// To create config file >>>>>
// 2. npx tailwindcss init -p
// vs extension>> tailwind css intellisense
// npm add react-icons

// git>>
// npm install gh-pages --save-dev
// git init
// git add .
// git status
// git commit -m "my portfolio"


// "dependencies": {
  //   "@emotion/react": "^11.11.1",
  //   "@emotion/styled": "^11.11.0",
  //   "@material-ui/core": "^4.12.4",
  //   "@material-ui/icons": "^4.11.3",
  //   "@material-ui/utils": "^4.11.3",
  //   "@mui/icons-material": "^5.14.3",
  //   "@mui/material": "^5.14.3",
  //   "@testing-library/jest-dom": "^5.16.5",
  //   "@testing-library/react": "^13.4.0",
  //   "@testing-library/user-event": "^13.5.0",
  //   "react": "^18.2.0",
  //   "react-dom": "^18.2.0",
  //   "react-icons": "^4.7.1",
  //   "react-scripts": "5.0.1",
  //   "react-scroll": "^1.8.9",
  //   "styled-components": "^6.0.5",
  //   "web-vitals": "^2.1.4"
  // },