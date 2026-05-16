import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-12 block"
      >
        ← writing
      </Link>

      <header className="mb-12 pb-12 border-b border-zinc-100">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-zinc-500 leading-relaxed mb-4">{post.description}</p>
        )}
        <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-zinc-400">
          {post.date}
        </span>
      </header>

      <article className="prose prose-zinc prose-sm max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-zinc-900 prose-a:underline-offset-4 prose-code:font-[family-name:var(--font-geist-mono)] prose-code:text-zinc-800 prose-code:bg-zinc-50 prose-code:px-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
