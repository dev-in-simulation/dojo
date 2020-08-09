import React from "react";

import { NavArrowConfig } from "../helpers/pageConfig";
import Container from "../template/container";
import { IconBtn } from "../atoms/btn";

//TODO change container class to carousel-nav in css and here
function CarouselNav(props) {
  return (
    <Container addClasses="carousel-nav">
      <IconBtn config={NavArrowConfig.left} handleClick={props.handleClick} />
      <IconBtn config={NavArrowConfig.right} handleClick={props.handleClick} />
    </Container>
  );
}

export default CarouselNav;
