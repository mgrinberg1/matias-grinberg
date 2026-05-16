import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));

  const posts = files.map((filename) => {
    const slug = getSlugFromFilename(filename);
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description,
    } satisfies PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getRecentPosts(count: number): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  let filepath: string | null = null;

  for (const candidate of candidates) {
    const p = path.join(POSTS_DIR, candidate);
    if (fs.existsSync(p)) {
      filepath = p;
      break;
    }
  }

  if (!filepath) return null;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description,
    content,
  };
}
