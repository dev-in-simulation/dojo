import React from "react";

function Project(props) {
  return (
    <section className={`project ${props.addClasses}`}>
      {props.children}
    </section>
  );
}

export default Project;
