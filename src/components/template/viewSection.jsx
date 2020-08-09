import React from "react";
import PropTypes from "prop-types";

//* <ViewSection> groups related content together. Used inside <View>
function ViewSection(props) {
  let sectionClasses = "view-section";

  if (props.addClasses) {
    sectionClasses += " " + props.addClasses;
  }

  return (
    <section className={sectionClasses} id={props.id}>
      {props.children}
    </section>
  );
}

ViewSection.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    addClasses: PropTypes.string,
  }),
};

export default ViewSection;
