import React, { useEffect, useRef } from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import ParticleBackground from "../organisms/particleBackground";
import { ProjectsConfig } from "../helpers/pageConfig";
import useScreenSize from "../hooks/useScreenSize";

import Project from "../molecules/project";

function AllProjects(props) {
  const displayProjects = ProjectsConfig.allProjects.map((work) => (
    <Project key={work.name} data={work} />
  ));

  return displayProjects;
}

function Projects(props) {
  const [screenSize, screenRef] = useScreenSize();

  useEffect(() => {
    console.log(`projects screensize label: ${screenSize}`);
  }, [screenSize]);

  return (
    <View id="projects" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Projects" addClasses="is-size-1 show-sides" />
        <p className="title is-size-6">description for project's page</p>

        <p ref={screenRef} id="get-screensize">
          {screenSize}
        </p>
      </ViewSection>

      <ViewSection>
        <AllProjects />
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
