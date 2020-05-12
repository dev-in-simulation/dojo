import React from "react";
import { FooterConfig as config } from "../helpers/pageConfig";
import DisplayIcons from "../molecules/displayIcons";

function Footer(props) {
  return (
    <footer className="page-view footer-view">
      <section className="view centered footer">
        <p className="closing-words title is-size-5 weight--light">
          {config.title}
        </p>
        <DisplayIcons icons={config.iconsData} />
        <p className="copyright body is-size-2 weight--light">
          {config.copyright}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
