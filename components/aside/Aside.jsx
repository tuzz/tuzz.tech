import { useState, useEffect } from "react";
import useDebounce from "../../hooks/use_debounce";

const Aside = ({ target, children, moveDown }) => {
  moveDown = moveDown || 0;

  const [listener, setListener] = useState(null);
  const [style, setStyle] = useState(null);

  const alignNextToTarget = useDebounce(() => {
    const current = target.current;
    if (!current) return; // Handle a race condition.

    const rectangle = current.getBoundingClientRect();
    const offset = window.scrollY + rectangle.top + moveDown;

    setStyle({ top: offset, opacity: 1, transition: "opacity 0.3s" });
  }, 50);

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
