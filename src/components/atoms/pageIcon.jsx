//* used to display the icon that sits at the top
//* of each page

import React from "react";
import PropTypes from "prop-types";

function PageIcon(props) {
  return (
    <div className="page-icon">
      <img src="assets/icons/codeIcon.svg" alt="page icon"></img>
    </div>
  );
}

PageIcon.propTypes = {};

export default PageIcon;
