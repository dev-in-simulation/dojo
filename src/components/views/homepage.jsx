import React from "react";
import ParticleBackground from "../organisms/particleBackground";
import AnimateIt from "../molecules/animateIt";

import View from "../template/view";
import ViewSection from "../template/viewSection";

function Homepage() {
  return (
    <View id="homepage">
      <AnimateIt />
      <ViewSection>
        <h1 className="title">This is h1</h1>
        <h2 className="title">This is h2</h2>
        <h3 className="title">This is h3</h3>
        <h4 className="title">This is h4</h4>
        <h5 className="title">This is h5</h5>
        <h6 className="title">This is h6</h6>
      </ViewSection>

      <ParticleBackground />
      <ViewSection>
        <span className="img-container">
          <img
            src="./assets/icons/beaker.svg"
            alt="default logo: a beaker made in svg"
          ></img>
        </span>
        <p className="description">
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
