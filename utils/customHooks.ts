import { useState, useEffect } from "react";

export const useWindowCheck = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (window) setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return width;
};
