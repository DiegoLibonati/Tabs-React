import { useState } from "react";
import { UseOpacity } from "../entities/entities";

export const useOpacity = (): UseOpacity => {
  const [opacity, setOpacity] = useState<number>(1);

  return {
    opacity,
    setOpacity,
  };
};
