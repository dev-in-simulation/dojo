import React from "react";
import SocialIcons from "../molecules/socialIcons";

function Footer(props) {
  const iconsData = [
    {
      name: "github",
      link: "https://www.github.com/niems",
      imgPath: "assets/social/github.svg",
      imgAlt: "redirect to my github account",
    },
  ];
  return (
    <footer className="footer">
      <SocialIcons icons={iconsData} />
    </footer>
  );
}

export default Footer;
