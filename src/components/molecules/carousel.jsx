import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "../template/container";

function CarouselImg({ img }) {
  return <img className="carousel-img" src={img.src} alt={img.alt} />;
}

function CarouselImgWithSizes({ img }) {
  return (
    <img
      className="carousel-img"
      srcSet={img.srcSet}
      src={img.src}
      alt={img.alt}
    />
  );
}

//* srcSet: string of all the srcset image sizes
//* src: default image to render
CarouselImgWithSizes.propTypes = {
  img: PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
};

function Carousel(props) {
  const [imgIndex, setImgIndex] = useState(0); //* starting index used to display image

  if (!props.images || !props.images.length) {
    console.error("no images passed");
    return null;
  }

  return (
    <Container id={props.id} addClasses="carousel">
      <CarouselImgWithSizes img={props.images[imgIndex]} />
    </Container>
  );
}

export default Carousel;
