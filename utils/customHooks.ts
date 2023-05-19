import { useState, useEffect } from "react";

export const useWindowCheck = () => {
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
      if (window) setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    });

    return width;
  }
};
