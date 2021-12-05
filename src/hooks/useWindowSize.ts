import React, { useEffect, useState } from "react";
import { mobileScreenWidth } from "configs/general";

const getWindowSizes = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < mobileScreenWidth,
});

export const useWindowSize = () => {
  const [sizes, setSizes] = useState(getWindowSizes());

  useEffect(() => {
    const setWindowSizes = () => {
      setSizes(getWindowSizes);
    };
    window.addEventListener("resize", setWindowSizes);
    return () => {
      window.removeEventListener("resize", setWindowSizes);
    };
  }, []);

  return sizes;
};
