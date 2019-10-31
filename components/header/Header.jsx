import css from "./styles.scss";

export const H1 = ({ children }) => (
  <h1 className={css.h1}>{children}</h1>
);

export const H2 = ({ children }) => (
  <h2 className={css.h2}>{children}</h2>
);

export const H3 = ({ children }) => (
  <h3 className={css.h3}>{children}</h3>
);
