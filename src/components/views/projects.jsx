import React from "react";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import ParticleBackground from "../organisms/particleBackground";
import Project from "../molecules/project";

function Projects(props) {
  return (
    <View id="projects" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Recent Work" addClasses="is-size-1 show-sides" />
        <h4 className="title is-size-4">This is h4</h4>
        <h5 className="title is-size-5">This is h5</h5>
        <h6 className="title is-size-6">This is h6</h6>
      </ViewSection>

      <ParticleBackground />
    </View>
  );
}

export default Projects;
