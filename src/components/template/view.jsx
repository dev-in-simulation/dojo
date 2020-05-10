import React from "react";

//* each <View /> encloses a single page
function View(props) {
  return (
    <section className="view" id={props.id}>
      {props.children}
    </section>
  );
}

export default View;
