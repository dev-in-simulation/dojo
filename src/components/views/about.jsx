import React from "react";
import { AboutConfig as config } from "../helpers/pageConfig";
import ViewTitle from "../atoms/viewTitle";

import View from "../template/view";
import ViewSection from "../template/viewSection";
import DisplayIcons from "../molecules/displayIcons";
<<<<<<< HEAD
=======
import PageIcon from "../atoms/pageIcon";
>>>>>>> inbf-transfer-backup

function About(props) {
  return (
    <View id="about">
<<<<<<< HEAD
      <ViewSection>
        <ViewTitle title="About" addClasses="is-size-1 show-sides" />

        <p className="subtitle is-size-1">{config.description}</p>
        <p className="subtitle is-size-1">{config.description2}</p>
      </ViewSection>

      <ViewSection addClasses="skills">
        <p className="title is-size-5">{config.dailyDescription}</p>
=======
      <PageIcon data={config.pageIcon} />
      <ViewSection>
        <ViewTitle title="About" addClasses="page-title show-sides" />

        <p className="content-1">{config.description}</p>
        <p className="content-1">{config.description2}</p>
      </ViewSection>

      <ViewSection addClasses="skills">
        <p className="content-2 weight--normal">{config.dailyDescription}</p>
>>>>>>> inbf-transfer-backup
        <DisplayIcons icons={config.iconsDaily} />
      </ViewSection>

      <ViewSection addClasses="skills">
<<<<<<< HEAD
        <p className="title is-size-5">{config.occasionalDescription}</p>
=======
        <p className="content-2 weight--normal">
          {config.occasionalDescription}
        </p>
>>>>>>> inbf-transfer-backup
        <DisplayIcons icons={config.iconsOccasional} />
      </ViewSection>
    </View>
  );
}

export default About;
