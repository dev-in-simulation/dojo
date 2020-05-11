//* displays single icon
import React from "react";
import PropTypes from "prop-types";

function SocialIcon({ data }) {
  return (
    <a
      className="social-icon-link"
      target="_blank"
      rel="noreferrer noopener"
      href={data.link}
      alt={data.imgAlt}
    >
      <img className="social-icon-img" src={data.imgPath} alt={data.imgAlt} />
    </a>
  );
}

function Icon({ data }) {
  let displayIcon = null;

  if (data.type === "social") {
    displayIcon = <SocialIcon data={data} />;
  }

  return <span className="icon-container">{displayIcon}</span>;
}

Icon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;
