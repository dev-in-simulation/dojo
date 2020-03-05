import React from 'react';

function Homepage() {
  return (
    <section id="homepage" className="view">
      <h1 className="title">React Router Template</h1>
      <span className="logo-container">
        <img
          className="logo"
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
    </section>
  );
}

export default Homepage;
