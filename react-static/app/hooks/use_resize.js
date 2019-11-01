import React, { useEffect } from "react";

const useResize = (callback) => {
  useEffect(() => {
    const listener = window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", listener)
  }, []);
};

export default useResize;
