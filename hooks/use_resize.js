import { useState, useEffect } from "react";

const useResize = (callback, dependencies = []) => {
  const [listener, setListener] = useState(null);

  const removeListener = () => {
    if (listener) {
      window.removeEventListener("resize", listener)
    }
  };

  useEffect(() => {
    removeListener();
    setListener(window.addEventListener("resize", callback));

    return removeListener;
  }, dependencies);
};

export default useResize;
