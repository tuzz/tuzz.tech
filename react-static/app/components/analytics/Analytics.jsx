import { useEffect } from "react";
import ReactGA from "react-ga";

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("UA-148955810-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default Analytics;
