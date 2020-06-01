import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "../template/container";

function CarouselImg({ img }) {
  return <img className="carousel-img" src={img.src} alt={img.alt} />;
}

function Carousel(props) {
  const [imgIndex, setImgIndex] = useState(0); //* starting index used to display image

  if (!props.images) {
    console.error("no images passed");
    return null;
  }

  return (
    <Container id={props.id} addClasses="carousel">
      <CarouselImg img={props.images[imgIndex]} />
    </Container>
  );
}

export default Carousel;
