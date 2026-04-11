"use client";
import type { CSSProperties } from "react";

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  small?: boolean;
}

export function Tag({ label, active = false, onClick, small = false }: TagProps) {
  const isButton = !!onClick;
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: small ? "0.2rem 0.6rem" : "0.25rem 0.7rem",
    borderRadius: "100px",
    fontSize: small ? "0.7rem" : "0.75rem",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.02em",
    border: "1px solid",
    cursor: isButton ? "pointer" : "default",
    backgroundColor: active ? "var(--accent)" : "var(--bg-secondary)",
    borderColor: active ? "var(--accent)" : "var(--border)",
    color: active ? "#fff" : "var(--text-secondary)",
    userSelect: "none",
  };

  const buttonStyle: CSSProperties = {
    ...style,
    backgroundColor: undefined,
    borderColor: undefined,
    color: undefined,
    "--tag-bg": active ? "var(--accent)" : "var(--bg-secondary)",
    "--tag-border": active ? "var(--accent)" : "var(--border)",
    "--tag-color": active ? "#fff" : "var(--text-secondary)",
    "--tag-hover-bg": "var(--accent-bg)",
    "--tag-hover-border": "var(--accent)",
    "--tag-hover-color": "var(--accent)",
  };

  if (active) {
    buttonStyle["--tag-hover-bg"] = "var(--accent)";
    buttonStyle["--tag-hover-border"] = "var(--accent)";
    buttonStyle["--tag-hover-color"] = "#fff";
  }

  if (isButton) {
    return (
      <button
        onClick={onClick}
        className="tag-button"
        data-active={active}
        style={buttonStyle}
        aria-pressed={active}
      >
        {label}
      </button>
    );
  }

  return <span style={style}>{label}</span>;
}
