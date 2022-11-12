import { useState, useEffect } from "react";

export const useWindowCheck = (message = "yo") => {
  console.log("message", message);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return width;
};
