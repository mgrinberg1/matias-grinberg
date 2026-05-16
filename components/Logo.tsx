"use client";

import { useState } from "react";

interface LogoProps {
  src?: string;
  name: string;
  initial?: string;
}

export default function Logo({ src, name, initial }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const fallback = initial ?? name.slice(0, 2).toUpperCase();

  if (!src || failed) {
    return (
      <div
        className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 select-none"
        aria-label={name}
      >
        <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
          {fallback}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className="w-8 h-8 object-contain rounded grayscale opacity-80 dark:opacity-60 flex-shrink-0"
    />
  );
}
