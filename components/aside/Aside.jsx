import { useState, useEffect } from "react";

const Aside = ({ target, children }) => {
  const [style, setStyle] = useState(null);

  const alignAside = () => {
    const current = target.current;
    const rectangle = current.getBoundingClientRect();
    const offset = window.scrollY + rectangle.top;

    setStyle({ top: offset, opacity: 1, transition: "opacity 0.3s" });
  };

  useEffect(alignAside, [target]);

  useEffect(() => {
    window.addEventListener("resize", alignAside);
  }, []);

  return <aside style={style}>{children}</aside>;
};

export default Aside;
