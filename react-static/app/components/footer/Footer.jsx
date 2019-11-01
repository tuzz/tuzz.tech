import React from "react";
import css from "./styles.scss";

const Footer = () => (
  <div className={css.footer}>
    <p>
      &copy; {new Date().getFullYear()} {" "}
      <a href="https://twitter.com/chrispatuzzo" target="_blank">Chris Patuzzo</a>
    </p>
  </div>
);

export default Footer;
