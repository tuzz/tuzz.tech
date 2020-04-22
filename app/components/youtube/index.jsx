import css from "./styles.scss";

const YouTube = ({ id }) => (
  <iframe
     className={css.youtube}
     width="560"
     height="315"
     src={`https://www.youtube.com/embed/${id}`}
     frameBorder="0"
     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen>
  </iframe>
);

export default YouTube;
