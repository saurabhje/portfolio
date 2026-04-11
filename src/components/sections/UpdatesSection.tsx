"use client";
import type { Update } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";
import type { CSSProperties } from "react";

interface UpdatesSectionProps {
  updates: Update[];
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function UpdateItem({ update, showBorder = true }: { update: Update; showBorder?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: "1.25rem",
        padding: "1.25rem 0",
        borderBottom: showBorder ? "1px solid var(--border-light)" : "none",
        alignItems: "start",
      }}
    >
      {/* Date */}
      <time
        dateTime={update.date}
        style={{
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          paddingTop: "0.15rem",
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.01em",
        }}
      >
        {formatDate(update.date)}
      </time>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
          {update.content}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
          {update.tags?.map((tag) => (
            <Tag key={tag} label={tag} small />
          ))}
          {update.link && (
            <Link
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-link"
              style={{
                fontSize: "0.72rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                marginLeft: "0.25rem",
                "--link-color": "var(--accent)",
                "--link-hover-opacity": "0.7",
              } as CSSProperties}
            >
              Link ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function UpdatesSection({ updates }: UpdatesSectionProps) {
  return (
    <section
      id="updates"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <SectionHeader
        label="Updates"
        title="What I'm up to"
        description="Short notes on what I'm building, reading, thinking about."
      />

      <div>
        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr",
            gap: "1.25rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Date
          </span>
          <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Note
          </span>
        </div>

        {updates.map((update, index) => (
          <UpdateItem
            key={update.id}
            update={update}
            showBorder={index < updates.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
