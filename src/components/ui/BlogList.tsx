"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { Tag } from "@/components/ui/Tag";

interface BlogListProps {
  posts: BlogPost[];
  allTags: string[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogList({ posts, allTags }: BlogListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <>
      {/* Tag filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
        <Tag label="All" active={activeTag === null} onClick={() => setActiveTag(null)} />
        {allTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Posts */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <article
              className="hover-surface"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "2rem",
                padding: "1.5rem 1rem",
                borderBottom: "1px solid var(--border-light)",
                borderRadius: "12px",
                marginLeft: "-1rem",
                marginRight: "-1rem",
                "--surface-hover-bg": "var(--bg-card)",
              } as CSSProperties}
            >
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h2>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                  {post.description}
                </p>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {post.tags.map((tag) => (
                    <Tag key={tag} label={tag} small />
                  ))}
                </div>
              </div>
              <div style={{ flexShrink: 0, textAlign: "right" }}>
                <time style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", whiteSpace: "nowrap" }}>
                  {formatDate(post.date)}
                </time>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{post.readingTime}</span>
              </div>
            </article>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", padding: "2rem 0" }}>
            No posts with that tag.
          </p>
        )}
      </div>
    </>
  );
}
