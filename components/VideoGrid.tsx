"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Record<string, boolean>>({});

  function activate(id: string) {
    setActive((prev) => ({ ...prev, [id]: true }));
  }

  const isSingle = videos.length === 1;

  return (
    <div className={`grid gap-3 ${isSingle ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
      {videos.map(({ id, title }) => (
        <div
          key={id}
          className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-sm"
        >
          {active[id] ? (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => activate(id)}
              className="absolute inset-0 w-full h-full group"
              aria-label={`Play: ${title}`}
            >
              {/* Thumbnail — external YouTube URL, next/image not applicable */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-black/50 group-hover:bg-black/75 flex items-center justify-center transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4 ml-0.5"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Title bar */}
              <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs truncate text-left">{title}</p>
              </div>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
