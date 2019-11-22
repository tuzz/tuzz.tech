import React from "react";
import css from "./styles.scss";
import onlyText from "../../helpers/only_text";

const Static = ({ path, children }) => (
  <div className={css.static}>
    <p>This content will be written to <strong>{path}</strong> at build time:</p>

    {children}

    <p>This page will be deleted from the build directory.</p>

    <pre className={`write-to-static-file ${path}`}>
      {onlyText(children)}
    </pre>
  </div>
);

export default Static;
