import React, { useRef } from "react";

import Navbar from "./components/organisms/navbar";
import Homepage from "./components/views/homepage";
import About from "./components/views/about";
import Projects from "./components/views/projects";
import Footer from "./components/organisms/footer";
import { IconBtn } from "./components/atoms/btn";
import { FABConfig } from "./components/helpers/pageConfig";

function App() {
  const scrollToTopRef = useRef(null);

  function handleSetRef(el) {
    if (!scrollToTopRef.current) {
      scrollToTopRef.current = el;
    }
  }

  function handleScrollHome(e) {
    e.preventDefault();

    if (scrollToTopRef.current) {
      //* confirm reference exists
      scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main id="app" className="App">
      <Navbar />
      <Projects />
      <Homepage handleSetRef={handleSetRef} />
      <IconBtn config={FABConfig} handleClick={handleScrollHome} />
      <About />
      <Footer />
    </main>
  );
}

export default App;
