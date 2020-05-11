import React from "react";
import PropTypes from "prop-types";

//* <ViewSection> groups related content together. Used inside <View>
function ViewSection(props) {
  return (
    <section className="view-section" id={props.id}>
      {props.children}
    </section>
  );
}

ViewSection.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default ViewSection;
