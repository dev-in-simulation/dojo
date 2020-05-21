import React from "react";
import ParticleBackground from "../organisms/particleBackground";
import ViewTitle from "../atoms/viewTitle";
import { IconTextBtn } from "../atoms/btn";
import { DownloadBtnConfig } from "../helpers/pageConfig";

import View from "../template/view";
import ViewSection from "../template/viewSection";

function Homepage(props) {
  return (
    <View id="homepage" handleSetRef={props.handleSetRef}>
      <ViewSection>
        <ViewTitle title="Homepage" addClasses="is-size-1 show-sides" />
        <h4 className="title is-size-4">This is h4</h4>
        <h5 className="title is-size-5">This is h5</h5>
        <h6 className="title is-size-6">This is h6</h6>
      </ViewSection>

      <ParticleBackground />
      <ViewSection>
        <span className="img-container">
          <img
            src="./assets/icons/beaker.svg"
            alt="default logo: a beaker made in svg"
          ></img>
        </span>
        <IconTextBtn data={DownloadBtnConfig} />
        <p className="body is-size-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ViewSection>
    </View>
  );
}

export default Homepage;
