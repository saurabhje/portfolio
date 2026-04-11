"use client";
interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <span
        style={{
          display: "inline-block",
          fontSize: "0.72rem",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.1em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 400,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
          marginBottom: description ? "0.75rem" : 0,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
