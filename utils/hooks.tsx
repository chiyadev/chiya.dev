import { useEffect, useState } from "react";

export function useWindowSize() {
  const [state, setState] = useState<[number, number]>();

  useEffect(() => {
    const handle = () => {
      setState([window.innerWidth, window.innerHeight]);
    };

    handle();

    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return state;
}
