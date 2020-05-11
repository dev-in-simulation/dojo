//* displays all social icons in single container
import React from "react";
import PropTypes from "prop-types";
import Icon from "../atoms/icon";

function SocialIcons({ icons }) {
  return (
    <span className="social-icons-container">
      {icons.map((icon) => (
        <Icon key={icon.name} data={icon} />
      ))}
    </span>
  );
}

SocialIcons.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default SocialIcons;
