import React from "react";
import A from "../anchor";
import css from "./styles.scss";

const NavBar = ({ navigation }) => {
  const { links } = navigation;

  // Override breadcrumbs for now since we don't have index pages.
  const breadcrumbs = [
    { text: "tuzz.tech", href: "/blog/react-commentary-sidebar" },
    { text: "blog", href: "/blog/react-commentary-sidebar" },
  ];

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
