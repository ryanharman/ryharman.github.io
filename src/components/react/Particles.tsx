import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import OnScroll from "./OnScroll";

export default function ParticlesContainer() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  return (
    <OnScroll>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="h-screen w-full absolute top-0 left-0 overflow-hidden"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </OnScroll>
  );
}
