import React from "react";
import dedent from "dedent";
import Static from "../components/static";
import Highlight from "../components/highlight";
import * as pages from "../helpers/page_listing";

const urls = Object.values(pages).map(page => `
  <url>
    <loc>https://tuzz.tech${page.path}</loc>
    <lastmod>${page.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`);

const content = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>
`;

const Sitemap = () => (
  <Static path="/sitemap.xml">
    <Highlight className="xml">{dedent(content)}</Highlight>
  </Static>
);

export default Sitemap;
