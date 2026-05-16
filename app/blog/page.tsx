import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on building, operations, and Latin America.",
};

const LABEL = "font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-widest text-zinc-400";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-zinc-500 mt-2 text-sm">
          Essays and notes on building, operations, and Latin America.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className={LABEL}>No posts yet.</p>
      ) : (
        <ul className="divide-y divide-zinc-100">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-start justify-between py-5 gap-6">
                <div className="space-y-1 flex-1">
                  <p className="font-medium group-hover:text-zinc-500 transition-colors">
                    {post.title}
                  </p>
                  {post.description && (
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
                <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-zinc-400 flex-shrink-0 mt-1">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
