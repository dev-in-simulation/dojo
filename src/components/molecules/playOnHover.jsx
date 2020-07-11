import React, { useRef } from "react";
import PropTypes from "prop-types";
import Container from "../template/container";

//TODO: change passed props from destructuring from mediaInfo to props
//*     - used to access props.addClasses and props.id

//TODO: add 'padding-control' to the components that aren't the sass
//TODO: menu to keep them contained

function PlayOnHover({ mediaInfo }) {
  //* attach to element you want to monitor
  const videoRef = useRef(null);
  let classList = "media-container";

  if (mediaInfo.addClasses) {
    classList += " " + mediaInfo.addClasses;
  }

  function handleHoverChange(hoverState) {
    //* component being hovered
    if (hoverState) {
      //* start playback if paused
      videoRef.current.paused && videoRef.current.play();
    }

    //* component no longer hovered
    else {
      //* pause video if playing
      !videoRef.current.paused && videoRef.current.pause();
    }
  }

  return (
    <div className={classList}>
      <video
        ref={videoRef}
        onMouseEnter={() => handleHoverChange(true)}
        onMouseLeave={() => handleHoverChange(false)}
        playsInline
        loop
      >
        <source src={mediaInfo.src} type={mediaInfo.type} />
        <p className="content-3">Video not supported</p>
      </video>
      <p className="content-3 name">{mediaInfo.name}</p>
    </div>
  );
}

PlayOnHover.propTypes = {
  mediaInfo: PropTypes.shape({
    src: PropTypes.string.isRequired, //* link to media
    type: PropTypes.string.isRequired, //* MIME type
    name: PropTypes.string, //* display name of media
  }).isRequired,
};

export default PlayOnHover;
