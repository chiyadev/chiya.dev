import React, { memo } from "react";
import Background from "../assets/Background.jpg";
import Klee from "../assets/Klee.png";
import { chakra } from "@chakra-ui/react";
import Snowfall from "./Snowfall";
import { useMousePosition, useWindowSize } from "../utils/hooks";

const parallaxStrength = 0.01;
const parallaxEasing = "transform .6s cubic-bezier(0.33, 1, 0.68, 1)";

const ParallaxBackground = () => {
  const size = useWindowSize();
  const position = useMousePosition();

  let parallax: [number, number];

  if (size && position) {
    parallax = [(position[0] / size[0] - 0.5) * parallaxStrength, (position[1] / size[1] - 0.5) * parallaxStrength];
  } else {
    parallax = [0, 0];
  }

  return (
    <>
      <chakra.img
        position="absolute"
        w="full"
        h="full"
        src={Background}
        objectFit="cover"
        transition={parallaxEasing}
        style={{
          transform: `scale(${1 + parallaxStrength}) translate(${parallax[0] * 100}%, ${parallax[1] * 100}%)`,
        }}
      />

      <Snowfall
        position="absolute"
        w="full"
        h="full"
        snowflakeCount={size ? size[0] * 0.1 : undefined}
        transition={parallaxEasing}
        style={{
          transform: `scale(${1 + parallaxStrength * 5}) translate(${parallax[0] * 500}%, ${parallax[1] * 500}%)`,
        }}
      />

      <chakra.img
        position="absolute"
        left="50%"
        h="full"
        src={Klee}
        objectFit="cover"
        transition={parallaxEasing}
        style={{
          transform: `translateX(-50%) scale(1.18) scale(${1 + parallaxStrength}) translate(${parallax[0] * 100}%, ${
            parallax[1] * 100
          }%)`,
        }}
      />
    </>
  );
};

export default memo(ParallaxBackground);
