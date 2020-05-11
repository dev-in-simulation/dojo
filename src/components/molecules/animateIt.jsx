import React, { useState, useEffect } from "react";

function TextOffset({ text }) {
  return (
    <React.Fragment>
      <text y="50" className="text offset">
        {text}
      </text>
    </React.Fragment>
  );
}

function TextPath({ text }) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (offset < 200) {
      const id = setTimeout(() => {
        const newOffset = offset + 5;
        console.log(`useEffecT() offset: ${newOffset}\n`);
        setOffset(newOffset);
      }, 200);
    }
  }, [offset, setOffset]);

  return (
    <React.Fragment>
      <path
        id="test-text-path"
        className="path with-text"
        d="M 0,0 h100 v100 h-100 v-100"
      />
      <text y="40" className="text">
        <textPath
          id="text-path"
          href="#test-text-path"
          className="text-path"
          startOffset={offset}
        >
          {text}
        </textPath>
      </text>
    </React.Fragment>
  );
}

function LinePaths(props) {
  return (
    <React.Fragment>
      <line x1="l0" y1="20" x2="100" y2="20" stroke="black" />
    </React.Fragment>
  );
}

function Paths(props) {
  return (
    <React.Fragment>
      <path className="path" d="M 10,5 h 80" />
      <path className="path" d="M 90,10 l -80,70" />
      <path className="path" d="M 10,85 h 80" />
    </React.Fragment>
  );
}

function AnimateIt(props) {
  const text = "AnimateIt() is running this text...";

  return (
    <svg viewBox="0 0 100 100" className="animate-it debug">
      {/*<TextPath text={text} />*/}
      <TextOffset text={text} />
      {/*<LinePaths />*/}
      {/*<Paths />*/}
    </svg>
  );
}

export default AnimateIt;
