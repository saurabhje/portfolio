import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, BlogPost, Update } from "@/types";

const contentDir = path.join(process.cwd(), "content");

// ── Projects ──────────────────────────────────────────────────────────────────

export function getAllProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      return JSON.parse(raw) as Project;
    })
    .sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | null {
  const file = path.join(contentDir, "projects", `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as Project;
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);

      // Calculate reading time (avg 200 wpm)
      const words = raw.split(/\s+/).length;
      const minutes = Math.ceil(words / 200);

      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? new Date().toISOString(),
        tags: data.tags ?? [],
        readingTime: `${minutes} min read`,
        featured: data.featured ?? false,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const file = path.join(contentDir, "blog", `${slug}${ext}`);
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, "utf-8");
      const { data, content } = matter(raw);
      const words = raw.split(/\s+/).length;
      const minutes = Math.ceil(words / 200);

      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? new Date().toISOString(),
        tags: data.tags ?? [],
        readingTime: `${minutes} min read`,
        featured: data.featured ?? false,
        content,
      } as BlogPost;
    }
  }
  return null;
}

// ── Updates ───────────────────────────────────────────────────────────────────

export function getAllUpdates(): Update[] {
  const file = path.join(contentDir, "updates", "updates.json");
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, "utf-8");
  const updates: Update[] = JSON.parse(raw);
  return updates.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
