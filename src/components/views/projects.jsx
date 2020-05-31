import React from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import ParticleBackground from "../organisms/particleBackground";
import { ProjectsConfig } from "../helpers/pageConfig";

import Project from "../molecules/project";

function AllProjects(props) {
  const displayProjects = ProjectsConfig.allProjects.map((work) => (
    <Project data={work} />
  ));

  return displayProjects;
}

function Projects(props) {
  return (
    <View id="projects" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Projects" addClasses="is-size-1 show-sides" />
        <p className="body is-size-1">description for project's page</p>
      </ViewSection>

      <ViewSection>
        <AllProjects />
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
