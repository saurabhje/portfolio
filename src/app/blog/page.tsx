import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { BlogList } from "@/components/ui/BlogList";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on software, craft, and building things.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "8rem 1.5rem 5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Writing
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          Essays & notes
        </h1>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "420px" }}>
          Thinking out loud about software, simplicity, and the craft of building things that last.
        </p>
      </div>

      <BlogList posts={posts} allTags={allTags} />
    </div>
  );
}
