import React, { useState, useReducer } from "react";
import { FieldInput, FieldArea } from "./fieldInput";
import { ContactConfig, FIELD_ID } from "../helpers/pageConfig";
const { formFields } = ContactConfig;

function formReducer(state, action) {
  console.log(`\n\nformReducer() type: ${action.type}`);
  const updatedState = { ...state };

  function updateActiveIndex(isValid) {
    console.error("\n\nupdateActiveIndex()");
    console.log(`\t - current index: ${state.index}`);
    if (isValid && state.value.length > 0) {
      const nextIndex = state.index < 4 ? state.index + 1 : state.index;
      state.updateIndex(nextIndex);

      console.error(`\t\t *** updating to next index: ${nextIndex}`);
    } else {
      console.log("\t\t nothing to update...");
    }
  }

  if (action.payload.value.length > 0) {
    //TODO: error for updateState.isValid because not being passed payload.invalid from onKeyPress
    updatedState.isValid = action.payload.isValid;
    console.error(`\t\t * isValid updating to: ${action.payload.isValid}`);
    console.error(`\t\t * isValid currently: ${state.isValid}\n\n`);
  }

  //* payload says invalid but field is blank
  else {
    updatedState.isValid = true;
  }

  switch (action.type) {
    case "onChange":
      updatedState.value = action.payload.value;
      console.log(
        `onChange() updatedState: ${JSON.stringify(updatedState)}\n\n`
      );
      return { ...updatedState };

    case "onBlur":
      console.log(`onBlur() updatedState: ${JSON.stringify(updatedState)}\n\n`);

      //* trimming submissions and saving
      updatedState.value = action.payload.value.trim();
      updateActiveIndex(updatedState.isValid);
      return { ...updatedState };

    case "onKeyPress": //* pressed enter
      console.log("\n\nonKeyPress()");

      //* trimming submissions and saving
      updatedState.value = action.payload.value.trim();
      updateActiveIndex(updatedState.isValid);
      return { ...updatedState };

    default:
      throw new Error();
  }
}

function handleSubmitTest(e) {
  if (e) {
    e.preventDefault();
    console.log(`\n\nhandleSubmitTest()`);
    //TODO: check all fields are valid, then send post request to server
    //TODO: add CAPTCHA
  }
}

function Form() {
  //* keeps track of the current active inputfield
  const [activeIndex, setActiveIndex] = useState(0);

  //* inputfield setup
  const [name, dispatchName] = useReducer(formReducer, {
    value: "", //* inputfield value
    isValid: true, //* determines error border
    index: FIELD_ID.NAME, //* inputfield index (used to pull additional form data)
    updateIndex: setActiveIndex,
  });

  const [email, dispatchEmail] = useReducer(formReducer, {
    value: "", //* inputfield value
    isValid: true, //* determines error border
    index: FIELD_ID.EMAIL, //* inputfield index (used to pull additional form data)
    updateIndex: setActiveIndex,
  });

  const [subject, dispatchSubject] = useReducer(formReducer, {
    value: "", //* inputfield value
    isValid: true, //* determines error border
    index: FIELD_ID.SUBJECT, //* inputfield index (used to pull additional form data)
    updateIndex: setActiveIndex,
  });

  return (
    <form className="form" onSubmit={handleSubmitTest}>
      <fieldset>
        <legend>Get In Touch</legend>

        {activeIndex === name.index && (
          <FieldInput
            input={name}
            dispatch={dispatchName}
            data={formFields[FIELD_ID.NAME]}
            activeIndex={activeIndex}
          />
        )}

        {activeIndex === email.index && (
          <FieldInput
            input={email}
            dispatch={dispatchEmail}
            data={formFields[FIELD_ID.EMAIL]}
            activeIndex={activeIndex}
          />
        )}

        {activeIndex >= subject.index && (
          <FieldInput
            input={subject}
            dispatch={dispatchSubject}
            data={formFields[FIELD_ID.SUBJECT]}
            activeIndex={activeIndex}
          />
        )}
        {/*TODO: add indicators here, using activeIndex */}

        {/*
        <FieldArea
          input={state[FIELD_ID.MSG]}
          dispatch={dispatch}
          data={formFields[FIELD_ID.MSG]}
        />

        */}
        <input
          className="form-submit weight--bold"
          value="press it"
          type="submit"
        />
      </fieldset>
    </form>
  );
}

export default Form;
