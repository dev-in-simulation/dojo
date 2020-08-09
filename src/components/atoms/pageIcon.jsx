//* used to display the icon that sits at the top
//* of each page

import React from "react";
import PropTypes from "prop-types";

function PageIcon({ data }) {
  let iconClasses = data.addClasses
    ? `page-icon ${data.addClasses}`
    : "page-icon";

  return (
    <div className={iconClasses}>
      <img src={data.imgPath} alt={data.imgAlt}></img>
    </div>
  );
}

PageIcon.propTypes = {
  data: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    addClasses: PropTypes.string,
  }).isRequired,
};

export default PageIcon;
