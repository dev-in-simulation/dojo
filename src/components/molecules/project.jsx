import React, { useState, useCallback } from "react";
import Carousel from "./carousel";

function ProjectDesc({ data }) {
  return (
    <React.Fragment>
      <p className="body is-size-1 project-role project-data">{data.role}</p>
      <p className="body is-size-2 project-desc project-data">
        {data.description}
      </p>
    </React.Fragment>
  );
}

function Project({ data }) {
  const [showAll, setShowAll] = useState(false);
  let projectClasses = "project";

  if (data.addClasses) {
    projectClasses += ` ${data.addClasses.trim()}`;
  }

  //* project full-view rendered if true
  projectClasses += showAll ? " toggled-on" : " toggled-off";

  const handleShowAll = useCallback(
    (e) => {
      setShowAll((prevState) => !prevState);
    },
    [setShowAll]
  );
  //TODO check onEntered and onExit for CSSTransition

  return (
    <section className={projectClasses}>
      <Carousel
        id={`${data.name.toLowerCase()}-carousel`}
        images={data.images}
      />
      <h6 className="title is-size-6">{data.name}</h6>
      <p className="subtitle is-size-1">{data.briefDescription}</p>

      {showAll && <ProjectDesc data={data} />}

      <button className="btn content-toggle" onClick={handleShowAll}>
        {showAll ? "Collapse" : "More"}
      </button>
    </section>
  );
}

export default Project;
