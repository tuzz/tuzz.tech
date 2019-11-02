import React from "react";
import A from "../anchor";
import css from "./styles.scss";

const NavBar = ({ navigation }) => {
  const { breadcrumbs, links } = navigation;

  return (
    <div className={css.nav_bar}>
      <span className={css.breadcrumbs}>
        {breadcrumbs.map(({ text, href }, i) => <A key={i} href={href}>{text}</A>)}
      </span>

      <span className={css.links}>
        {links.map(({ text, href }, i) => <A key={i} href={href}>{text}</A>)}
      </span>
    </div>
  );
};

export default NavBar;
