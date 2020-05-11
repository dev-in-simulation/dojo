import React from "react";
import PropTypes from "prop-types";

//* each <View /> encloses a single page
function View(props) {
  return (
    <article className="view" id={props.id}>
      {props.children}
    </article>
  );
}

View.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default View;
