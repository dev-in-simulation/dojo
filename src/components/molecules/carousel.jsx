import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "../template/container";

function CarouselImgWithSizes({ img }) {
  return (
    <img
      className="carousel-img"
      srcSet={img.srcSet}
      sizes={img.sizes}
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
    //!return null;
    return <Container id={props.id} addClasses="carousel"></Container>;
  }

  return (
    <Container id={props.id} addClasses="carousel">
      <CarouselImgWithSizes img={props.images[imgIndex]} />
    </Container>
  );
}

export default Carousel;
