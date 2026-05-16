"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: { load: (el?: HTMLElement) => void };
    };
  }
}

export default function TwitterTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("twitter-widget-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "twitter-widget-script";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => window.twttr?.widgets.load(ref.current ?? undefined);
      document.body.appendChild(script);
    } else {
      window.twttr?.widgets.load(ref.current ?? undefined);
    }
  }, []);

  return (
    <div ref={ref} className="twitter-embed-wrapper">
      <a
        className="twitter-timeline"
        data-height="700"
        data-theme="dark"
        data-chrome="noheader nofooter noborders transparent"
        data-dnt="true"
        href="https://twitter.com/matt1_g?ref_src=twsrc%5Etfw"
      >
        Tweets by @matt1_g
      </a>
    </div>
  );
}
