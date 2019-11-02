import React from "react"
import LayoutV2 from "../layout_v2";
import { Router } from "@reach/router"
import { Root, Routes, addPrefetchExcludes } from "react-static"

addPrefetchExcludes([/^examples/]);

export default () => (
  <Root>
    <React.Suspense fallback="">
      <LayoutV2.Static>
        <Router>
          <LayoutV2.Dynamic default >
            <Routes default />
          </LayoutV2.Dynamic>
        </Router>
      </LayoutV2.Static>
    </React.Suspense>
  </Root>
);
