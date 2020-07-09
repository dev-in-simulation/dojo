import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Container from "../template/container";

function PlayOnHover({ mediaInfo }) {
  //* attach to element you want to monitor
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  function handleHoverChange(hoverState) {
    setIsHovered(hoverState);

    //* hovering over media - starts media playback if paused
    if (hoverState) {
      videoRef.current.paused && videoRef.current.play();
    }

    //* no longer hovering - pauses media if playing
    else {
      !videoRef.current.paused && videoRef.current.pause();
    }
  }

  return (
    <Container addClasses="media">
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
    </Container>
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
