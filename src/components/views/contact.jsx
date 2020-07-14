import React from "react";
import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";

function Contact(props) {
  return (
    <View id="contact">
      <ViewTitle title="Say Hi" addClasses="page-title show-sides" />
    </View>
  );
}

export default Contact;
