import { useState, useEffect } from "react";

const Aside = ({ target, children, moveDown }) => {
  const [style, setStyle] = useState(null);

  const alignAside = () => {
    const current = target.current;
    if (!current) return;

    const rectangle = current.getBoundingClientRect();
    const offset = window.scrollY + rectangle.top;

    setStyle({
      top: offset,
      opacity: 1,
      transition: "opacity 0.3s",
      marginTop: moveDown,
    });
  };

  useEffect(alignAside, [target]);

  useEffect(() => {
    window.addEventListener("resize", alignAside);
  }, []);

  return <aside style={style}>{children}</aside>;
};

export default Aside;
