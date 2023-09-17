import React, { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8659384252547972";
    script.crossOrigin = "anonymous";

    document.head.append(script);

    const tags = document.createElement("meta");

    tags.setAttribute("name", "google-site-verification");
    tags.setAttribute("content", "cLQeOK02aLCmDS7rHdPpuMNkgw6fYFgjJRerpEB1NVY");

    document.head.appendChild(tags);
  }, []);
  return;
  null;
};

export default ScriptLoader;
