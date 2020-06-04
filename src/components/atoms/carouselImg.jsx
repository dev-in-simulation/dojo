import React from "react";
import PropTypes from "prop-types";

function CarouselImg({ img }) {
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
//* sizes: string that determines which image to render based on screensize
//* src: default image to render
CarouselImg.propTypes = {
  img: PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
};

export default CarouselImg;
