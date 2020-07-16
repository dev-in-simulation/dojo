import React from "react";

import ParticleBackground from "../organisms/particleBackground";
import ViewTitle from "../atoms/viewTitle";
import View from "../template/view";
import ViewSection from "../template/viewSection";
import PageIcon from "../atoms/pageIcon";
import { IconTextBtn } from "../atoms/btn";
import { DownloadBtnConfig, HomeConfig } from "../helpers/pageConfig";

function Logo(props) {
  return (
    <svg
      className={`svg-logo ${props.addClasses}`}
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path className="top main-bar" d="M10 10 L90 10"></path>
      <circle className="node" r="0.8" cx="8.5" cy="10"></circle>
      <circle className="node" r="0.8" cx="91.5" cy="10"></circle>

      <path className="top secondary-bar" d="M20 12 L75 12"></path>
      <circle className="node secondary" r="0.5" cx="18.8" cy="12"></circle>
      <circle className="node secondary" r="0.5" cx="76.2" cy="12"></circle>

      <path className="mid main-bar" d="M86 15 l-27 26"></path>
      <circle className="node" r="0.8" cx="87" cy="14"></circle>
      <circle className="node" r="0.8" cx="58" cy="42"></circle>

      <path className="mid main-bar" d="M14.8 83 l31 -30"></path>
      <circle className="node" r="0.8" cx="46.6" cy="52.2"></circle>
      <circle className="node" r="0.8" cx="14" cy="84"></circle>

      <path className="mid secondary-bar" d="M74.4 29 L23 78"></path>
      <circle className="node secondary" r="0.5" cx="75.2" cy="28"></circle>
      <circle className="node secondary" r="0.5" cx="22.2" cy="78.8"></circle>

      <path className="bottom main-bar" d="M10 90 L90 90"></path>
      <circle className="node" r="0.8" cx="8.5" cy="90"></circle>
      <circle className="node" r="0.8" cx="91.5" cy="90"></circle>

      <path className="bottom secondary-bar" d="M20 88 h15"></path>
      <circle className="node secondary" r="0.5" cx="18.8" cy="88"></circle>
      <circle className="node secondary" r="0.5" cx="36.2" cy="88"></circle>

      <path className="bottom secondary-bar" d="M52 88 h32"></path>
      <circle className="node secondary" r="0.5" cx="50.8" cy="88"></circle>
      <circle className="node secondary" r="0.5" cx="85.2" cy="88"></circle>
    </svg>
  );
}

function Homepage(props) {
  return (
    <View id="homepage" handleSetRef={props.handleSetRef}>
      <Logo />
      <ParticleBackground />
    </View>
  );
}

export default Homepage;
