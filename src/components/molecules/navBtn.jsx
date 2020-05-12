import React from "react";
import PropTypes from "prop-types";
import { NavConfig } from "../helpers/pageConfig";

function BtnIcon({ data }) {
  return <img className="btn-img" src={data.imgPath} alt={data.imgAlt} />;
}

const NavBtn = React.memo(function NavBtn(props) {
  let btnClasses = ["btn fab--scroll-to-top"];

  if (props.addClasses) {
    btnClasses = [...btnClasses, ...props.addClasses];
  }

  btnClasses = btnClasses.join(" ");

  return (
    <button className={btnClasses} onClick={props.handleClick}>
      <BtnIcon data={NavConfig.iconData} />
    </button>
  );
});

NavBtn.propTypes = {
  props: PropTypes.shape({
    handleClick: PropTypes.func.isRequired, //* button onClick callback
    btnClasses: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default NavBtn;
