import React from "react";
import PropTypes from "prop-types";

//* each <View /> encloses a single page
function View(props) {
  return (
    <article className="page-view" id={props.id}>
      <section className="view debug">{props.children}</section>
    </article>
  );
}

View.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default View;
