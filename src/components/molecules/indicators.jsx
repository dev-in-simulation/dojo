import React from "react";
import PropTypes from "prop-types";

function Indicators(props) {
  const indicatorsList = [];

  for (let i = 0; i < props.totalIndicators; i++) {
    let indicatorClasses = "indicator";

    if (i === props.activeIndex) {
      indicatorClasses += " active";
    }

    indicatorsList.push(
      <span
        key={i}
        id={i}
        className={indicatorClasses}
        onClick={props.handleClick}
      ></span>
    );
  }

  return <div className="indicators-wrapper">{indicatorsList}</div>;
}

Indicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  totalIndicators: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Indicators;
