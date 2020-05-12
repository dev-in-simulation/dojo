import React, { useRef } from "react";

import Homepage from "./components/views/homepage";
import About from "./components/views/about";
import Footer from "./components/organisms/footer";
import NavBtn from "./components/molecules/navBtn";

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
      <Homepage handleSetRef={handleSetRef} />
      <NavBtn handleClick={handleScrollHome} />
      <About />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </main>
  );
}

export default App;
