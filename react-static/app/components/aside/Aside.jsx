import React, { useState, useEffect } from "react";
import css from "./styles.scss";

import usePrint from "../../hooks/use_print";
import useDebounce from "../../hooks/use_debounce";
import useResize from "../../hooks/use_resize";
import useDelays from "../../hooks/use_delays";

const Aside = ({ target, children, moveDown = 0 }) => {
  const [style, setStyle] = useState(null);

  const align = () => {
    const current = target.current;
    if (!current) return; // Guard a race condition.

    const rectangle = current.getBoundingClientRect();
    const offset = window.scrollY + rectangle.top + moveDown;

    setStyle({ top: offset, opacity: 1, transition: "opacity 0.3s" });
  };

  useEffect(align, []);
  usePrint(align);

  const alignSoon = useDebounce(align, 50);

  useResize(alignSoon);
  useDelays(alignSoon, [200, 500, 1000, 2500, 5000, 15000, 30000]);

  return (
    <aside className={css.aside} style={style}>
      {children}
    </aside>
  );
};

export default Aside;
