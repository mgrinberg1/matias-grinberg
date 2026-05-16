import Link from "next/link";

const L = "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
        >
          MG
        </Link>
        <div className="flex items-center gap-3 sm:gap-5 font-[family-name:var(--font-geist-mono)] text-xs sm:text-sm">
          <a href="#career" className={L}>career</a>
          <a href="#me" className={L}>me</a>
          <a href="#river" className={L}>river</a>
          <a
            href="https://x.com/matt1_g"
            target="_blank"
            rel="noopener noreferrer"
            className={L}
          >
            @matt1_g
          </a>
        </div>
      </div>
    </nav>
  );
}
