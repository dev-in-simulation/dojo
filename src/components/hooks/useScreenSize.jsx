import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
const SCREEN_SIZE_CONFIG = {
  getAttrValueOf: "content",
  pseudoElt: "::before",
};

function useScreenSize(screenConfig = {}) {
  const screenRef = useRef(null);
  const [screenSize, setScreenSize] = useState(null);
  const config = { ...SCREEN_SIZE_CONFIG, ...screenConfig };

  const getComputedStyles = useCallback(() => {
    if (screenRef && screenRef.current) {
      let computedStyles = null;

      if (config.pseudoElt) {
        computedStyles = window.getComputedStyle(
          screenRef.current,
          config.pseudoElt
        );
      } else {
        computedStyles = window.getComputedStyle(screenRef.current);
      }

      if (computedStyles) {
        let attrValue = computedStyles[config.getAttrValueOf];
        console.log(`\n\nuseScreenSize ${config.getAttrValueOf}: ${attrValue}`);

        if (screenSize !== attrValue) {
          setScreenSize(attrValue);
          console.log("\t - updating!\n\n");
        }
      }
    }

    //return null;
    //setScreenSize((prevState) => prevState);
  }, [config, screenSize]);

  useEffect(() => {
    function handleResize() {
      console.log(`handleResize() :D`);
      getComputedStyles();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("removal");
      window.removeEventListener("resize", handleResize);
    };
  }, [getComputedStyles]);

  useEffect(() => {
    getComputedStyles();
  }, [getComputedStyles]);

  return [screenSize, screenRef];
}

useScreenSize.propTypes = {
  screenConfig: PropTypes.shape({
    getAttrValueOf: PropTypes.string,
    pseudoElt: PropTypes.string,
  }),
};

export default useScreenSize;
