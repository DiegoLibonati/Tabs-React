import { useState } from "react";

type UseOpacity = {
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
};

export const useOpacity = (): UseOpacity => {
  const [opacity, setOpacity] = useState<number>(1);

  return {
    opacity,
    setOpacity,
  };
};
