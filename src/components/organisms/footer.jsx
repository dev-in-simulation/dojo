import React from "react";
import SocialIcons from "../molecules/socialIcons";

function Footer(props) {
  const iconsData = [
    {
      name: "github",
      link: "https://www.github.com/niems",
      imgPath: "assets/social/github.svg",
      imgAlt: "redirect to my github account",
      type: "social",
    },
    {
      name: "codepen",
      link: "https://codepen.io/niems",
      imgPath: "assets/social/codepen.svg",
      imgAlt: "redirect to my codepen account",
      type: "social",
    },
    {
      name: "dribbble",
      link: "https://www.github.com/niems",
      imgPath: "assets/social/dribbble.svg",
      imgAlt: "redirect to my dribbble account",
      type: "social",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/zach-niemann-6203105a/",
      imgPath: "assets/social/linkedin.svg",
      imgAlt: "redirect to my linkedin account",
      type: "social",
    },
  ];
  return (
    <footer className="footer debug">
      <SocialIcons icons={iconsData} />
      <p className="footer-text">Hand typed by me © twentytwenty</p>
    </footer>
  );
}

export default Footer;
