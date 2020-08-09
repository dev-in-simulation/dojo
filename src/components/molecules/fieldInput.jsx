import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const FieldInput = React.memo((props) => {
  //TODO: move all 3 temp-handlers into a single one, using e.type to determine
  //TODO  what type to call with dispatch
  function handleChange(e) {
    if (e && e.target) {
      const { value } = e.target;

      //! testing passing isValid
      const isValid = e.target.checkValidity();

      props.dispatch({
        type: "onChange",
        payload: { index: props.data.index, value: value, isValid },
      });
    }
  }

  function handleBlur(e) {
    if (e && e.target) {
      console.log(`\n\nhandleBlur() event type: ${e.type}`);
      //* determines input error state & the next field focused
      const isValid = e.target.checkValidity();

      props.dispatch({
        type: "onBlur",
        payload: {
          index: props.data.index,
          value: props.input.value,
          isValid: isValid,
        },
      });
    }
  }

  function handleKeyPress(e) {
    if (e) {
      const { charCode, key } = e;
      console.error("\n\nhandleKeyPress()");

      if (key === "Enter" || charCode === 13) {
        console.log(`\t enter pressed: checking if field is valid...`);

        props.dispatch({
          type: "onKeyPress",
          payload: {
            value: props.input.value,
            isValid: props.input.isValid,
          },
        });
      }
    }
  }

  //TODO  based on activeIndex updating AND if the current index === activeIndex

  return (
    <React.Fragment>
      <label className="label" htmlFor={props.data.id}>
        {props.data.label}
      </label>
      <input
        className={props.input.isValid ? "inputfield" : "inputfield error"}
        type={props.data.type}
        id={props.data.id}
        name={props.data.id}
        value={props.input.value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        autoComplete="off"
        spellCheck={false}
        autoFocus={props.activeIndex === props.input.index}
        minLength={props.data.minLength}
        required
      />
    </React.Fragment>
  );
});

FieldInput.defaultProps = {
  data: {
    value: "",
    type: "text",
    minLength: 2,
    autoFocus: false,
  },
};

FieldInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }),

  dispatch: PropTypes.func.isRequired,

  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string,
    minLength: PropTypes.number,
    autoFocus: PropTypes.bool,
  }),
};

export const FieldArea = React.memo((props) => {
  function handleChange(e) {
    if (e && e.target) {
      const { value } = e.target;

      props.dispatch({
        type: "onChange",
        payload: { index: props.data.index, value: value },
      });
    }
  }

  return (
    <React.Fragment>
      <label className="label" htmlFor={props.data.id}>
        {props.data.label}
      </label>
      <textarea
        className="textarea"
        type={props.data.type}
        id={props.data.id}
        name={props.data.id}
        value={props.input.value}
        //? onBlur={props.handleBlur}
        //? onKeyPress={props.handleKeyPress}
        onChange={handleChange}
        autoComplete="off"
        spellCheck={false}
        autoFocus={props.data.autoFocus}
        minLength={props.data.minLength}
        rows={props.data.rows}
        required
      ></textarea>
    </React.Fragment>
  );
});

FieldArea.defaultProps = {
  data: {
    type: "text",
    minLength: 10,
    rows: 4,
    autoFocus: false,
  },
};

FieldArea.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }),

  dispatch: PropTypes.func.isRequired,

  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string,
    minLength: PropTypes.number,
    rows: PropTypes.number,
    autoFocus: PropTypes.bool,
  }),
};
