import React from "react";
import A from "../anchor";
import css from "./styles.scss";

const NavBar = ({ previous, next }) => {
  const latest = "/blog/grappling-with-infinity";

  return (
    <div className={css.nav_bar}>
      <span className={css.breadcrumbs}>
        <A href={latest}>tuzz.tech</A>
        <A href={latest}>blog</A>
      </span>

      <span className={css.links}>
        <A href={previous && previous.path}>← Previous</A>
        <A href={next && next.path}>Next Article →</A>
      </span>
    </div>
  );
};

export default NavBar;
