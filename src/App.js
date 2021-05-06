import NavBar from "./components/navBar";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
