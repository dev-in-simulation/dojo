import React, { useRef, useState } from "react";
//import PropTypes from "prop-types";
import Container from "../template/container";

function useOnHover() {
  const [isHovered, setIsHovered] = useState();
  const isHoveredRef = useRef(null); //* attach to element you want to monitor

  function handleOnHover(e) {
    console.log(`handleOnHover() - hoveringggg`);
  }

  return [isHovered, isHoveredRef];
}

function PlayOnHover(props) {
  const [isHovered, hoveredRef] = useOnHover();

  return (
    <Container>
      <p className="content-1">playOnHover component placeholder</p>
    </Container>
  );
}

export default PlayOnHover;
