import React from "react";
import { FooterConfig as config } from "../helpers/pageConfig";
<<<<<<< HEAD
=======
import ViewSection from "../template/viewSection";
>>>>>>> inbf-transfer-backup
import DisplayIcons from "../molecules/displayIcons";

function Footer(props) {
  return (
<<<<<<< HEAD
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
=======
    <footer id="footer" className="page-view">
      <ViewSection>
        <p className="closing-words content-1 weight--bold">{config.title}</p>
        <p className="closing-words content-4 weight--normal">
          {config.subtitle}
        </p>

        <DisplayIcons icons={config.iconsData} />
        <p className="copyright content-5 weight--normal">{config.copyright}</p>
      </ViewSection>
>>>>>>> inbf-transfer-backup
    </footer>
  );
}

export default Footer;
