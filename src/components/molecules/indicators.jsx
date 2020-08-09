import React from "react";
import PropTypes from "prop-types";

//TODO: click to go to image
function Indicators({ activeIndex, totalIndicators, handleClick }) {
  const indicatorsList = [];
  console.log(`\n\nonClick: ${JSON.stringify(handleClick)}`);
  console.log(`type: ${JSON.stringify(handleClick)}`);

  for (let i = 0; i < totalIndicators; i++) {
    let indicatorClasses = "indicator";

    if (i === activeIndex) {
      indicatorClasses += " active";
    }

    indicatorsList.push(
      <span
        key={i}
        id={i}
        className={indicatorClasses}
        onClick={handleClick}
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
