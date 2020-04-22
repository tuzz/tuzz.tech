import Layout from "../layout";
import { Router } from "@reach/router"
import { Root, Routes, addPrefetchExcludes } from "react-static"

addPrefetchExcludes([/^examples/]);

export default () => (
  <Root>
    <React.Suspense fallback="">
      <Layout.Static>
        <Router>
          <Layout.Dynamic default >
            <Routes default />
          </Layout.Dynamic>
        </Router>
      </Layout.Static>
    </React.Suspense>
  </Root>
);
