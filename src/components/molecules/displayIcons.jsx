//* displays all icons in single container
import React from "react";
import PropTypes from "prop-types";
import Icon from "../atoms/icon";

function DisplayIcons({ icons }) {
  return (
    <span className="display-icons-container">
      {icons.map((icon) => (
        <Icon key={icon.name} data={icon} />
      ))}
    </span>
  );
}

DisplayIcons.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default DisplayIcons;
