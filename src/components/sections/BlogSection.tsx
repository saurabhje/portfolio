"use client";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { BlogPost } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

interface BlogSectionProps {
  posts: BlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function PostRow({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article
        className="hover-surface"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1.5rem",
          padding: "1.25rem 1rem",
          borderRadius: "12px",
          cursor: "pointer",
          marginLeft: "-1rem",
          marginRight: "-1rem",
          "--surface-hover-bg": "var(--bg-card)",
        } as CSSProperties}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
            }}
          >
            {post.title}
          </h3>
          <p style={{ fontSize: "0.845rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>
            {post.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.1rem" }}>
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} small />
            ))}
          </div>
        </div>

        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <time
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              display: "block",
              whiteSpace: "nowrap",
            }}
          >
            {formatDate(post.date)}
          </time>
          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
            {post.readingTime}
          </span>
        </div>
      </article>
    </Link>
  );
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section
      id="blog"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
        <SectionHeader
          label="Writing"
          title="From the blog"
          description="Occasional essays on software, craft, and building things."
        />
        <Link
          href="/blog"
          className="interactive-link"
          style={{
            fontSize: "0.8rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            flexShrink: 0,
            paddingBottom: "0.5rem",
            "--link-color": "var(--text-secondary)",
            "--link-hover-color":
              "var(--text-primary)",
          } as CSSProperties}
        >
          All posts →
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post, i) => (
          <div
            key={post.slug}
            style={{
              borderBottom: i < posts.length - 1 ? "1px solid var(--border-light)" : "none",
            }}
          >
            <PostRow post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
