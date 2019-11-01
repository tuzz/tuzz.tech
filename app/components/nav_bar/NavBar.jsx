import React from "react";
import css from "./styles.scss";

const NavBar = ({ navigation }) => {
  const { breadcrumbs, links } = navigation;

  return (
    <div className={css.nav_bar}>
      <span className={css.breadcrumbs}>
        {breadcrumbs.map(({ text, href }, i) => <a key={i} href={href}>{text}</a>)}
      </span>

      <span className={css.links}>
        {links.map(({ text, href }, i) => <a key={i} href={href}>{text}</a>)}
      </span>
    </div>
  );
};

export default NavBar;
