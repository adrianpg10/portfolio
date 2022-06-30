import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Aboutme from "./components/aboutme/Aboutme";
import "./App.scss";
import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import { FiChevronsUp } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const cambiarTamanyo = () => {

    setWidth(window.innerWidth);
    if (width > 0 && width < 1280) {
      setMenuOpen(false);
    }

  }
  useEffect(() => {
    return () => {
      window.addEventListener("resize", cambiarTamanyo);
    }

  });

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Portfolio />
        <Experience />
        <Works />
        <Contact />
      </div>

      <a href="#top" className="volverarriba"><span><FiChevronsUp className='arrowup' /></span></a>
    </div>
  );
}

export default App;
