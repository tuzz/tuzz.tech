import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import Root from "./components/root"

if (typeof document !== "undefined") {
  const root = document.getElementById("root");
  const method = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = () => {
    method(<AppContainer><Root /></AppContainer>, root);
  }

  render();

  if (module && module.hot) {
    module.hot.accept("./components/root", render);
  }
}

export default Root
