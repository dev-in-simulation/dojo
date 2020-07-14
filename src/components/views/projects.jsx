import React from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import PlayOnHover from "../molecules/playOnHover";
import { ProjectsConfig, TinkeringData } from "../helpers/pageConfig";
import Project from "../molecules/project";

function AllProjects() {
  return ProjectsConfig.allProjects.map((work) => (
    <Project key={work.name} data={work} />
  ));
}

//*  tinkering project videos
function VideoList() {
  return TinkeringData.videos.map((video) => (
    <PlayOnHover key={video.id} mediaInfo={video} />
  ));
}

function Projects() {
  return (
    <View id="projects">
      <ViewSection>
        <ViewTitle
          title={ProjectsConfig.title}
          addClasses="page-title show-sides"
        />
        <p className="content-1">{ProjectsConfig.description}</p>
      </ViewSection>

      {/*
      <ViewSection addClasses="all-projects">
        <AllProjects />
      </ViewSection>

      
        */}
      <ViewSection addClasses="test-all-projects">
        <AllProjects />
      </ViewSection>

      <ViewSection addClasses="tinkering-work">
        <h3 className="header-2">{TinkeringData.title}</h3>
        <p className="content-2">{TinkeringData.description}</p>
        <VideoList />
      </ViewSection>
    </View>
  );
}

export default Projects;
