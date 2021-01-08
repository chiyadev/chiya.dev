import { useEffect, useState } from "react";

export function useWindowSize() {
  const [state, setState] = useState<[number, number]>();

  useEffect(() => {
    const handler = () => {
      setState([window.innerWidth, window.innerHeight]);
    };

    handler();

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return state;
}

export function useMousePosition() {
  const [state, setState] = useState<[number, number]>();

  useEffect(() => {
    const mouseHandler = ({ clientX, clientY }: MouseEvent) => {
      setState([clientX, clientY]);
    };

    const touchHandler = ({ touches }: TouchEvent) => {
      if (touches.length) {
        setState([touches[0].clientX, touches[0].clientY]);
      }
    };

    window.addEventListener("mousemove", mouseHandler);
    window.addEventListener("touchstart", touchHandler);
    window.addEventListener("touchend", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
      window.removeEventListener("touchstart", touchHandler);
      window.removeEventListener("touchend", touchHandler);
      window.removeEventListener("touchmove", touchHandler);
    };
  }, []);

  return state;
}
