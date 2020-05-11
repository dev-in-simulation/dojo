//* displays single icon
import React from "react";
import PropTypes from "prop-types";

function Icon({ data }) {
  return <span className="icon-container"></span>;
}

Icon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;
