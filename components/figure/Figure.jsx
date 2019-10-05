import css from "./styles.scss";

const Figure = ({ children, href }) => {
  const [figure, caption] = children;

  return (
    <figure className={css.figure}>
      <a href={href}>
        {figure}
      </a>

      <figcaption>
        <span className={css.arrow}>▲</span> {caption}
      </figcaption>
    </figure>
  );
};

Figure.Video = ({ src, children }) => (
  <Figure href={src}>
    <video muted autoPlay loop>
      <source src={src} type="video/mp4" />
    </video>

    {children}
  </Figure>
);

export default Figure;
