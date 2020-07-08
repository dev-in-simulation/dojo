import React from "react";
import PropTypes from "prop-types";

function ViewTitle(props) {
  //let titleClasses = "page-title";
  let titleClasses = "header-1";

  if (props.addClasses) {
    titleClasses += " " + props.addClasses;
  }

  return <h2 className={titleClasses}>{props.title}</h2>;
}

ViewTitle.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired, //* title to display
    addClasses: PropTypes.string, //* (default undefined) - adds optional classes to title container
  }),
};

export default ViewTitle;
