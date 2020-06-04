import React from "react";

import { NavArrowConfig } from "../helpers/pageConfig";
import Container from "../template/container";
import { IconBtn } from "../atoms/btn";

function CarouselNav(props) {
  return (
    <Container addClasses="nav-wrapper">
      <IconBtn config={NavArrowConfig.left} handleClick={props.handleClick} />
      <IconBtn config={NavArrowConfig.right} handleClick={props.handleClick} />
    </Container>
  );
}

export default CarouselNav;
