import Static from "../components/static";
import Highlight from "../components/highlight";
import * as listing from "../helpers/page_listing";

const pages = Object.values(listing);
const latestDate = pages[pages.length - 1].date;

const enclosure = ({ path, type, bytes }) => (
  `<enclosure url="https://tuzz.tech${path}" type="${type}" length="${bytes}" />`
);

const items = pages.map(page => `
    <item>
      <title>${page.title}</title>
      <link>https://tuzz.tech${page.path}</link>
      <guid>https://tuzz.tech${page.path}</guid>
      <description>${page.description}</description>
      <pubDate>${new Date(page.date).toUTCString()}</pubDate>
      <source url="https://tuzz.tech/feed.xml">tuzz.tech</source>
      <category>Technology</category>
      ${page.image ? enclosure(page.image) : "<!-- No image -->"}
      ${page.video ? enclosure(page.video) : "<!-- No video -->"}
    </item>
`);

const channel = `
  <channel>
    <title>tuzz.tech</title>
    <link>https://tuzz.tech</link>
    <description>All publications from tuzz.tech</description>
    <language>en-gb</language>
    <copyright>© ${new Date().getFullYear()} Chris Patuzzo</copyright>
    <pubDate>${new Date(latestDate).toUTCString()}</pubDate>
    ${items.join("")}
  </channel>
`;

const content = `
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">${channel}</rss>
`;

const Feed = () => (
  <Static path="/feed.xml">
    <Highlight className="xml">{dedent(content)}</Highlight>
  </Static>
);

export default Feed;
