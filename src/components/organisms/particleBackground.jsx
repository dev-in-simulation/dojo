import React from "react";
import Particles from "react-particles-js";

function ParticleBackground() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              //value_area: 1000,
            },
          },
        },
      }}
      className="particle-bg"
    />
  );
}

export default ParticleBackground;
