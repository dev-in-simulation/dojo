import React from "react";
import View from "../template/view";

function Homepage() {
  return (
    <View>
      <h1 className="title">This is a TITLE</h1>
      <h2 className="title">This is a TITLE</h2>
      <h3 className="title">This is a TITLE</h3>
      <h4 className="title">This is a TITLE</h4>
      <h5 className="title">This is a TITLE</h5>
      <h6 className="title">This is a TITLE</h6>
      <span className="img-container">
        <img
          className="img"
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
    </View>
  );
}

export default Homepage;
