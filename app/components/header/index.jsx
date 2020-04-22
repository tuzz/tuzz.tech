import React from "react"
import onlyText from "../../helpers/only_text"
import css from "./styles.scss"

export const H1 = ({ children }) => (
  <h1 className={css.h1}>{children}</h1>
);

export const H2 = ({ children }) => {
  const id = friendlyId(children);

  return (
    <a href={`#${id}`}>
      <h2 id={id} className={css.h2}>{children}</h2>
    </a>
  );
};

export const H3 = ({ children }) => {
  const id = friendlyId(children);

  return (
    <a href={`#${id}`}>
      <h3 id={id} className={css.h3}>{children}</h3>
    </a>
  );
};

const friendlyId = (children) => (
  onlyText(children)
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "")
);
