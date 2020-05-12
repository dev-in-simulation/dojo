//* displays single icon
import React from "react";
import PropTypes from "prop-types";

function DisplayIcon({ data }) {
  return (
    <a
      className="icon-link"
      target="_blank"
      rel="noreferrer noopener"
      href={data.link}
      alt={data.imgAlt}
    >
      <img className="icon-img" src={data.imgPath} alt={data.imgAlt} />
    </a>
  );
}

function Icon({ data }) {
  let iconClasses = "icon-container";
  iconClasses += " " + data.type;

  return (
    <span className={iconClasses}>
      <DisplayIcon data={data} />

      {data.type === "named" && (
        <span className="icon-name caption is-size-1">{data.name}</span>
      )}
    </span>
  );
}

Icon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired, //* name of link. used as key, and also displayed if type === named
    link: PropTypes.string.isRequired, //* icon link
    imgPath: PropTypes.string.isRequired, //* img src path
    imgAlt: PropTypes.string.isRequired, //* img alt text
    type: PropTypes.string.isRequired, //* type of icon (currently named or social) This determines how the icon renders
  }).isRequired,
};

export default Icon;
