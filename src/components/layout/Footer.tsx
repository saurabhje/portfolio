"use client";
import Link from "next/link";
import type { CSSProperties } from "react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-light)",
        padding: "1.5rem 1.5rem",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
          © {year} Saurabh. Built with Next.js.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { href: "https://github.com/saurabhje", label: "GitHub" },
            { href: "https://x.com/cachesaur", label: "X" },
            { href: "/blog", label: "Writing" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="interactive-link"
              style={{
                fontSize: "0.8rem",
                textDecoration: "none",
                "--link-color": "var(--text-muted)",
                "--link-hover-color": "var(--text-primary)",
                "--link-hover-opacity": "0.9",
              } as CSSProperties}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
