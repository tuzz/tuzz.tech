import React from "react";
import A from "../anchor";
import css from "./styles.scss";

// TODO: extract data so it can be used to build sitemap and index pages
//  - also include titles, publish dates, description?
//  - these can be used inside the MDX files

const orderedPaths = [
  "/blog/happy-100th",
  "/blog/how-bash-completion-works",
  "/blog/adding-bash-completion",
  "/blog/palindromic-superpermutations",
  "/blog/react-commentary-sidebar",
  "/blog/react-commentary-sidebar-2",
];

const NavBar = ({ path }) => {
  const index = orderedPaths.indexOf(path);

  const previous = orderedPaths[index - 1];
  const next = orderedPaths[index + 1];

  const links = [
    { text: "← Previous", href: previous },
    { text: "Next Article →", href: next },
  ];

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
