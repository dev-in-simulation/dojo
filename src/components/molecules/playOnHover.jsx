import React, { useRef, useState } from "react";
//import PropTypes from "prop-types";
import Container from "../template/container";

function PlayOnHover(props) {
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(null); //* attach to element you want to monitor

  function onEnter() {
    setIsHovered(true);
    console.log(`\t - onEnter()`);
  }

  function onLeave() {
    setIsHovered(false);
    console.log(`\t - onLeave()`);
  }

  return (
    <Container>
      <p
        className="content-1"
        ref={isHoveredRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        playOnHover component placeholder
      </p>
      {isHovered && <p className="content-3">hovering text :D</p>}
    </Container>
  );
}

export default PlayOnHover;
