import React from "react";
import PropTypes from "prop-types";

//* <Container> groups related content together. Used inside <ViewSection>
//* or by itself.
//! - difference between <Container> and <ViewSection> is the container will
//!     is not potentially a row of the screen, just a piece of it

//! - also uses a div instead of section
function Container(props) {
  let containerClasses = "container";

  if (props.addClasses) {
    containerClasses += " " + props.addClasses;
  }

  return (
    <div className={containerClasses} id={props.id}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    addClasses: PropTypes.string,
  }),
};

export default Container;
