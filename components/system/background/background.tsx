import Particles from "react-particles-js";
import React from "react";

const Background = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.1,
            },
            move: {
              direction: "right",
              speed: 0.2,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      >
        {children}
      </Particles>
    </>
  );
};

export default Background;
