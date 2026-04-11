"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "12rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 400,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}
      >
        Page not found
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          padding: "0.65rem 1.4rem",
          borderRadius: "10px",
          backgroundColor: "var(--text-primary)",
          color: "var(--bg-primary)",
          fontSize: "0.875rem",
          textDecoration: "none",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
