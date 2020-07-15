import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import Container from "../template/container";
import CarouselNav from "./carouselNav";
import CarouselImg from "../atoms/carouselImg";
import Indicators from "./indicators";

function getUpdatedIndex(classes, currIndex, max) {
  let index = currIndex;

  if (classes.includes("left")) {
    return index === 0 ? max : index - 1;
  } else if (classes.includes("right")) {
    return index === max ? 0 : index + 1;
  }

  return currIndex; //* no index change
}

getUpdatedIndex.propTypes = {
  classes: PropTypes.string.isRequired,
  currIndex: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

function Carousel(props) {
  const [imgIndex, setImgIndex] = useState(0); //* starting index used to display image

  const handleIndicatorClick = useCallback((e) => {
    if (e.currentTarget) {
      const id = e.currentTarget.id;
      setImgIndex(Number(id));
    }
  }, []);

  const handleArrowNav = useCallback(
    (e) => {
      let arrowClasses = e.currentTarget.className;

      let updatedIndex = getUpdatedIndex(
        arrowClasses,
        imgIndex,
        props.images.length - 1
      );

      //TODO: update image index
      setImgIndex(updatedIndex);
    },
    [imgIndex, props.images]
  );

  //* doesn't render arrow navigation or indicators if
  //* < two images passed
  if (props.images.length < 2) {
    return (
      <Container id={props.id} addClasses="carousel">
        {props.images.length ? (
          <CarouselImg img={props.images[imgIndex]} />
        ) : (
          <CarouselImg img={null} />
        )}
      </Container>
    );
  }

  return (
    <Container id={props.id} addClasses="carousel">
      <CarouselNav handleClick={handleArrowNav} />
      <CarouselImg img={props.images[imgIndex]} />

      <Indicators
        activeIndex={imgIndex}
        totalIndicators={props.images.length}
        handleClick={handleIndicatorClick}
      />
    </Container>
  );
}

Carousel.propTypes = {
  id: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default Carousel;
