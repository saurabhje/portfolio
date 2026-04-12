"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

interface BackLinkProps {
  href: string;
  label: string;
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="interactive-link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.8rem",
        textDecoration: "none",
        marginBottom: "3rem",
        "--link-color": "var(--text-secondary)",
        "--link-hover-color": "var(--text-primary)",
      } as CSSProperties}
    >
      ← {label}
    </Link>
  );
}
