import css from "./styles.scss";

const Figure = ({ src, children, href, alt }) => {
  href = href || src;
  alt = alt || children;

  return (
    <figure className={css.figure}>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>

      <figcaption>
        <span className={css.arrow}>▲</span> {children}
      </figcaption>
    </figure>
  );
};

export default Figure;
