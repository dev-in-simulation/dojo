import React from "react";
import { AboutConfig as config } from "../helpers/pageConfig";
import ViewTitle from "../atoms/viewTitle";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import DisplayIcons from "../molecules/displayIcons";
import PageIcon from "../atoms/pageIcon";

function About(props) {
  return (
    <View id="about">
      <PageIcon data={config.pageIcon} />
      <ViewSection>
        <ViewTitle title="About" addClasses="page-title show-sides" />

        <p className="content-1">{config.description}</p>
        <p className="content-1">{config.description2}</p>
      </ViewSection>

      <ViewSection addClasses="skills">
        <p className="content-2 weight--normal">{config.dailyDescription}</p>
        <DisplayIcons icons={config.iconsDaily} />
      </ViewSection>

      <ViewSection addClasses="skills">
        <p className="content-2 weight--normal">
          {config.occasionalDescription}
        </p>
        <DisplayIcons icons={config.iconsOccasional} />
      </ViewSection>
    </View>
  );
}

export default About;
