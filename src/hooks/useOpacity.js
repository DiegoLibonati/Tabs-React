import { useState } from "react";

export const useOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  return {
    opacity,
    setOpacity,
  };
};
