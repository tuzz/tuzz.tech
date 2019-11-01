import React, { useEffect } from "react";

const ExternalLinks = () => {
  useEffect(() => {
    const anchors = document.getElementsByTagName("a");

    for (let anchor of anchors) {
      const hasHref = anchor.getAttribute("href");
      const isExternal = anchor.hostname !== location.hostname;

      if (hasHref && isExternal) {
        anchor.target = "_blank";
      }
    }
  }, []);

  return null;
};

export default ExternalLinks;
