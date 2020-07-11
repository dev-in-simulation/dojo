import React from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import PlayOnHover from "../molecules/playOnHover";
import ParticleBackground from "../organisms/particleBackground";
import { ProjectsConfig, experimentTestData } from "../helpers/pageConfig";

import Project from "../molecules/project";

function AllProjects(props) {
  const displayProjects = ProjectsConfig.allProjects.map((work) => (
    <Project key={work.name} data={work} />
  ));

  return displayProjects;
}

function Projects(props) {
  const description =
    "From SVG animations using Sass (preprocessed CSS) to React.js, Node.js, Socket.IO, and WebRTC. Check out a few of my latest projects.";

  return (
    <View id="projects" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Projects" addClasses="show-sides" />
        <p className="content-1">{description}</p>
      </ViewSection>

      <ViewSection addClasses="all-projects">
        <AllProjects />
      </ViewSection>

      <ViewSection addClasses="tinkering-work">
        <h3 className="header-2">Tinkering</h3>
        <p className="content-2">
          These are a result of late-night tinkering. Tap / hover to animate!
        </p>
        <PlayOnHover mediaInfo={experimentTestData.preloader} />
        <PlayOnHover mediaInfo={experimentTestData.menu} />
        <PlayOnHover mediaInfo={experimentTestData.spinner} />
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
