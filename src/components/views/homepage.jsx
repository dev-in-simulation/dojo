import React from "react";

import ParticleBackground from "../organisms/particleBackground";
import ViewTitle from "../atoms/viewTitle";
import View from "../template/view";
import ViewSection from "../template/viewSection";
import PageIcon from "../atoms/pageIcon";
import { IconTextBtn } from "../atoms/btn";
import { DownloadBtnConfig, HomeConfig } from "../helpers/pageConfig";

function Homepage(props) {
  return (
    <View id="homepage" handleSetRef={props.handleSetRef}>
      <PageIcon data={HomeConfig.icon} />

      <ViewSection>
        <ViewTitle title="Homepage" addClasses="page-title show-sides" />
        <p className="content-1">{HomeConfig.briefDescription}</p>
      </ViewSection>

      <ParticleBackground />

      <ViewSection>
        <IconTextBtn data={DownloadBtnConfig} />
        <p className="content-2">{HomeConfig.description}</p>
      </ViewSection>
    </View>
  );
}

export default Homepage;
