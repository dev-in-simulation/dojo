import React from "react";
import SocialIcons from "../molecules/socialIcons";

function Footer(props) {
  const iconsData = [
    {
      name: "github",
      link: "https://www.github.com/niems",
      imgPath: "assets/social/github.svg",
      imgAlt: "redirect to my github profile",
      type: "social",
    },
    {
      name: "codepen",
      link: "https://codepen.io/niems",
      imgPath: "assets/social/codepen.svg",
      imgAlt: "redirect to my codepen profile",
      type: "social",
    },
    {
      name: "freecodecamp",
      link: "https://www.freecodecamp.org/niems",
      imgPath: "assets/social/freecodecamp.svg",
      imgAlt: "redirect to my freecodecamp profile",
      type: "social",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/zach-niemann-6203105a/",
      imgPath: "assets/social/linkedin.svg",
      imgAlt: "redirect to my linkedin profile",
      type: "social",
    },
  ];
  const title = "Living, learning, & leveling up one day at a time.";
  const copyright = "Hand typed by me © twentytwenty";
  return (
    <footer className="page-view footer-view">
      <section className="view centered footer">
        <p className="closing-words title is-size-5 weight--light">{title}</p>
        <SocialIcons icons={iconsData} />
        <p className="copyright body is-size-2 weight--light">{copyright}</p>
      </section>
    </footer>
  );
}

export default Footer;
