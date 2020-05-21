import React from "react";
import PropTypes from "prop-types";

function WithBtnIcon({ data }) {
  return <img className="btn-icon" src={data.imgPath} alt={data.imgAlt} />;
}

WithBtnIcon.propTypes = {
  data: PropTypes.shape({
    //? name:
  }).isRequired,
};

function WithText({ text }) {
  return <span className="btn-text">{text}</span>;
}

WithText.propTypes = {
  text: PropTypes.string.isRequired,
};

function WithBtn(props) {
  let btnClasses = `btn ${props.addClasses}`;
  return (
    <button className={btnClasses} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

WithBtn.propTypes = {
  props: PropTypes.shape({
    addClasses: PropTypes.string,
    handleClick: PropTypes.func,
  }),
};

//* data needs an icon object, text string, as well as
//* any additional classes (like button styling)
export function IconTextBtn({ data }) {
  return (
    <WithBtn addClasses="icon-text outline" handleClick={data.handleClick}>
      <WithBtnIcon data={data.icon} />
      <WithText text={data.text} />
    </WithBtn>
  );
}

export function IconBtn({ config, handleClick }) {
  return (
    <WithBtn addClasses={`icon ${config.addClasses}`} handleClick={handleClick}>
      <WithBtnIcon data={config.icon} />
    </WithBtn>
  );
}

//* data: the config data for the button based on type
//* type: what type of button it is (text w/icon, fab, etc.)
//Btn.propTypes = {
//data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
//type: PropTypes.string,
//};

//export default Btn;
