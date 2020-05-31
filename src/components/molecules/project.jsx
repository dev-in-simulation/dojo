import React, { useState, useCallback } from "react";

function ProjectDesc({ data }) {
  return (
    <React.Fragment>
      <p className="body is-size-1 project-role">{data.role}</p>
      <p className="body is-size-2 project-desc">{data.description}</p>
    </React.Fragment>
  );
}

function Project({ data }) {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = useCallback(
    (e) => {
      setShowAll((prevState) => !prevState);
    },
    [setShowAll]
  );

  return (
    <section className={`project ${data.addClasses}`}>
      {/*image carousel here*/}
      <h5 className="title is-size-5">{data.name}</h5>
      <p className="subtitle is-size-1">{data.briefDescription}</p>

      {showAll && <ProjectDesc data={data} />}

      <button className="btn content-toggle" onClick={handleShowAll}>
        {showAll ? "Collapse" : "More"}
      </button>
    </section>
  );
}

export default Project;
