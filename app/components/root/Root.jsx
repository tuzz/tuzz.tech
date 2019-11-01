import React from "react"
import { Root, Routes } from "react-static"

export default () => (
  <Root>
    <React.Suspense fallback="">
      <Routes />
    </React.Suspense>
  </Root>
);
