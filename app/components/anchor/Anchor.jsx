import React from "react";
import { Link } from "@reach/router"

const Anchor = ({ href, children, ...props }) => {
  if (!href) {
    return <a {...props}>{children}</a>;
  } else if (isExternal(href)) {
    return <a href={href} target="_blank" {...props}>{children}</a>;
  } else {
    return <Link to={href} {...props}>{children}</Link>;
  }
};

const isExternal = (href) => (
  href && (href.indexOf("://") > 0 || href.indexOf("//") === 0)
);

export default Anchor;
