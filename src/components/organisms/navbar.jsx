import React from "react";
import { NavbarConfig } from "../helpers/pageConfig";

function NavLogo({ logo }) {
  return (
    <a
      className="logo"
      target="_parent"
      rel="noreferrer noopener"
      href={logo.link}
      alt={logo.imgAlt}
    >
      <img src={logo.imgPath} alt={logo.imgAlt} />
    </a>
  );
}

function NavPages(props) {
  const pageLinks = props.pages.map((page) => (
    <a
      key={page.name}
      className="nav-link body is-size-1"
      target="_parent"
      rel="noreferrer noopener"
      href={page.link}
      alt={page.alt}
    >
      {page.name}
    </a>
  ));

  return <div className="nav-pages">{pageLinks}</div>;
}

function Navbar(props) {
  let navClasses = "nav";

  if (props.addClasses) {
    navClasses += " " + props.addClasses;
  }

  return (
    <nav className={navClasses}>
      <NavLogo logo={NavbarConfig.logo} />
      <NavPages pages={NavbarConfig.pages} />
    </nav>
  );
}

export default Navbar;
