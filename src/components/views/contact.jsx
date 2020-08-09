import React from "react";
import View from "../template/view";
import ViewSection from "../template/viewSection";
import PageIcon from "../atoms/pageIcon";
import Form from "../molecules/form";
import { ContactConfig } from "../helpers/pageConfig";

function Contact(props) {
  return (
    <View id="contact">
      <PageIcon data={ContactConfig.pageIcon} />
      <ViewSection>
        <Form />
      </ViewSection>
    </View>
  );
}

export default Contact;
