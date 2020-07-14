import React, { useState, useCallback } from "react";
import Carousel from "./carousel";

/*
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
    <div className={projectClasses}>
      <Carousel
        id={`${data.name.toLowerCase()}-carousel`}
        images={data.images}
      />
      <h6 className="project-name content-2 weight--normal">{data.name}</h6>
      <p className="project-brief-desc content-4 weight--normal">
        {data.briefDescription}
      </p>

      {showAll && <ProjectDesc data={data} />}

      <button className="btn content-toggle" onClick={handleShowAll}>
        {showAll ? "Collapse" : "More"}
      </button>
    </div>
  );
}
*/

function Project({ data }) {
  let projectClasses = "project";
  let projectTechStack = data.techStack.join(" | ");

  if (data.addClasses) {
    projectClasses += ` ${data.addClasses.trim()}`;
  }

  return (
    <div className={projectClasses}>
      <Carousel
        id={`${data.name.toLowerCase()}-carousel`}
        images={data.images}
      />
      <h6 className="project-name header-3 weight--bold">{data.name}</h6>
      <p className="project-tech-stack content-3 weight--light">
        {projectTechStack}
      </p>
      <p className="project-brief-desc content-2 weight--light">
        {data.description}
      </p>

      <p className="project-brief-desc2 content-2 weight--light">
        {data.description}
      </p>
    </div>
  );
}

export default Project;
