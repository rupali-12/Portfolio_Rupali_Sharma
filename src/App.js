import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CodingProfiles from "./components/coding_profiles";
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
