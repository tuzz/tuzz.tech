import React from "react"
import { Router } from "@reach/router"
import { Root, Routes, addPrefetchExcludes } from "react-static"

addPrefetchExcludes([/^examples/]);

export default () => (
  <Root>
    <React.Suspense fallback="">
      <Router>
        <ScrollToTop default >
          <Routes default />
        </ScrollToTop>
      </Router>
    </React.Suspense>
  </Root>
);

const ScrollToTop = ({ location, children }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
}
