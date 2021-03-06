import React from "react";
import { FooterConfig as config } from "../helpers/pageConfig";
import ViewSection from "../template/viewSection";
import DisplayIcons from "../molecules/displayIcons";

function Footer(props) {
  return (
    <footer id="footer" className="page-view">
      <ViewSection>
        <p className="closing-words content-1 weight--bold">{config.title}</p>
        <p className="closing-words content-4 weight--normal">
          {config.subtitle}
        </p>

        <DisplayIcons icons={config.iconsData} />
        <p className="copyright content-5 weight--normal">{config.copyright}</p>
      </ViewSection>
    </footer>
  );
}

export default Footer;
