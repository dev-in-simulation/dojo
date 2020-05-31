import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import ParticleBackground from "../organisms/particleBackground";
import { ProjectsConfig } from "../helpers/pageConfig";

import Project from "../molecules/project";

function AllProjects(props) {
  const displayProjects = ProjectsConfig.allProjects.map((work) => (
    <Project key={work.name} data={work} />
  ));

  return displayProjects;
}

function Projects(props) {
  return (
    <View id="projects" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Projects" addClasses="is-size-1 show-sides" />
        <p className="title is-size-6">description for project's page</p>
      </ViewSection>

      <ViewSection>
        <TransitionGroup component={null}>
          <AllProjects />
        </TransitionGroup>
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
