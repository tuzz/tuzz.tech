import path from "path";

export default {
  paths: {
    src: "app",
    temp: "tmp/build",
    dist: "tmp/dist",
    assets: "",
    buildArtifacts: "tmp/artifacts",
  },
  plugins: [
    ["react-static-plugin-source-filesystem", { location: "./app/pages" }],
    "react-static-plugin-reach-router",
    "react-static-plugin-mdx",
    "react-static-plugin-scss-modules",
  ],
}
