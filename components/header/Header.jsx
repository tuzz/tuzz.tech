import css from "./styles.scss";

export const H1 = ({ id, children }) => (
  <h1 id={id} className={css.h1}>{children}</h1>
);

export const H2 = ({ id, children }) => (
  <a href={`#${id}`}>
    <h2 id={throwIfMissing(id)} className={css.h2}>{children}</h2>
  </a>
);

export const H3 = ({ id, children }) => (
  <a href={`#${id}`}>
    <h3 id={throwIfMissing(id)} className={css.h3}>{children}</h3>
  </a>
);

const throwIfMissing = (id) => {
  if (!id) { throw new Error("id must be set for header"); }
  return id;
};
