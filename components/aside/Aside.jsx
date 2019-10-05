import { useState, useEffect } from "react";

const Aside = ({ target, children, moveDown }) => {
  const [listener, setListener] = useState(null);
  const [style, setStyle] = useState(null);

  const alignNextToTarget = () => {
    const current = target.current;
    if (!current) return; // Handle a race condition.

    const rectangle = current.getBoundingClientRect();
    const offset = window.scrollY + rectangle.top;

    setStyle({ top: offset, opacity: 1, transition: "opacity 0.3s", marginTop: moveDown });
  };

  const removeListener = () => {
    if (listener) {
      window.removeEventListener("resize", listener)
    }
  };

  useEffect(() => {
    removeListener();

    if (target.current) {
      alignNextToTarget();

      window.addEventListener("resize", alignNextToTarget);
    }

    return removeListener;
  }, [target]);


  return <aside style={style}>{children}</aside>;
};

export default Aside;
