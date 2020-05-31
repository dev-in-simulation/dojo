import React, { useState, useCallback } from "react";
import { CSSTransition } from "react-transition-group";

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
  const transitionTime = {
    wrapper: 1000,
    selectorsData: 1000,
  };

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

  return (
    <CSSTransition
      key={data.name}
      in={showAll}
      timeout={transitionTime.wrapper}
      classNames="project-wrapper"
    >
      <section className={projectClasses}>
        {/*image carousel here*/}
        <h5 className="title is-size-5">{data.name}</h5>
        <p className="subtitle is-size-1">{data.briefDescription}</p>

        {showAll && <ProjectDesc data={data} />}

        <button className="btn content-toggle" onClick={handleShowAll}>
          {showAll ? "Collapse" : "More"}
        </button>
      </section>
    </CSSTransition>
  );
}

export default Project;

/*

        //!</section><CSSTransition
          //!</section>in={showAll}
          //!</section>timeout={transitionTime.selectorsData}
          //!</section>classNames="project-data"
          //!</section>unmountOnExit
        //!</section>>
          //!</section><ProjectDesc data={data} />
        //!</section></CSSTransition>
  return (
    <section className={projectClasses}>
      <h5 className="title is-size-5">{data.name}</h5>
      <p className="subtitle is-size-1">{data.briefDescription}</p>

      <CSSTransition
        in={showAll}
        timeout={500}
        classNames="project"
        unmountOnExit
      >
        <ProjectDesc data={data} />
      </CSSTransition>

      <button className="btn content-toggle" onClick={handleShowAll}>
        {showAll ? "Collapse" : "More"}
      </button>
    </section>
  );
*/
