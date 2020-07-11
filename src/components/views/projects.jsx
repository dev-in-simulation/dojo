import React from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import PlayOnHover from "../molecules/playOnHover";
import ParticleBackground from "../organisms/particleBackground";
import { ProjectsConfig, TinkeringData } from "../helpers/pageConfig";

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
        <ViewTitle title={ProjectsConfig.title} addClasses="show-sides" />
        <p className="content-1">{ProjectsConfig.description}</p>
      </ViewSection>

      <ViewSection addClasses="all-projects">
        <AllProjects />
      </ViewSection>

      <ViewSection addClasses="tinkering-work">
        <h3 className="header-2">{TinkeringData.title}</h3>
        <p className="content-2">{TinkeringData.description}</p>
        <PlayOnHover mediaInfo={TinkeringData.preloader} />
        <PlayOnHover mediaInfo={TinkeringData.menu} />
        <PlayOnHover mediaInfo={TinkeringData.spinner} />
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
