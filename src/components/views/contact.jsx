import React from "react";
import View from "../template/view";
import ViewSection from "../template/viewSection";
import ViewTitle from "../atoms/viewTitle";
import PageIcon from "../atoms/pageIcon";
import { ContactConfig } from "../helpers/pageConfig";

function Contact(props) {
  return (
    <View id="contact">
      <PageIcon data={ContactConfig.pageIcon} />
      <ViewTitle title="Say Hi" addClasses="page-title show-sides" />
    </View>
  );
}

export default Contact;
