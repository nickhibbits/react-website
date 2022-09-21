import { useState, useEffect } from "react";

export const useWindowCheck = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    width > 1000
      ? console.log("DESKTOP", width)
      : console.log("NOT DESKTOP", width);
  }, [width]);

  return width;
};
