import TweetEmbed from "react-tweet-embed";

const Tweet = ({ id }) => (
  <TweetEmbed id={id} options={{ align: "center" }} />
);

export default Tweet;
