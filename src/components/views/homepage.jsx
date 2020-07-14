import React from "react";
import ParticleBackground from "../organisms/particleBackground";
import ViewTitle from "../atoms/viewTitle";
import { IconTextBtn } from "../atoms/btn";
import { DownloadBtnConfig, HomeConfig } from "../helpers/pageConfig";

import View from "../template/view";
import ViewSection from "../template/viewSection";

function Homepage(props) {
  return (
    <View id="homepage" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Homepage" addClasses="page-title show-sides" />
        <p className="content-1">{HomeConfig.briefDescription}</p>
      </ViewSection>

      <ParticleBackground />
      <ViewSection>
        <span className="img-container">
          <img src={HomeConfig.icon.imgPath} alt={HomeConfig.icon.imgAlt}></img>
        </span>
        <IconTextBtn data={DownloadBtnConfig} />
        <p className="content-2">{HomeConfig.description}</p>
      </ViewSection>
    </View>
  );
}

export default Homepage;
