"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type CSSProperties } from "react";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#updates", label: "Updates" },
  { href: "/blog", label: "Writing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const syncScrolledState = () => setScrolled(window.scrollY > 24);
    const syncAfterRestore = () => {
      syncScrolledState();
      frameId = window.requestAnimationFrame(syncScrolledState);
      timeoutId = window.setTimeout(syncScrolledState, 120);
    };

    syncAfterRestore();
    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("pageshow", syncAfterRestore);
    window.addEventListener("focus", syncAfterRestore);
    document.addEventListener("visibilitychange", syncAfterRestore);

    return () => {
      window.removeEventListener("scroll", syncScrolledState);
      window.removeEventListener("pageshow", syncAfterRestore);
      window.removeEventListener("focus", syncAfterRestore);
      document.removeEventListener("visibilitychange", syncAfterRestore);
      window.cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(245,240,235,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="interactive-link"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s",
            "--link-color": "var(--text-primary)",
            "--link-hover-opacity": "0.65",
          } as CSSProperties}
        >
          Saurabh Singh
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interactive-link"
              style={{
                fontSize: "0.875rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
                "--link-color":
                  pathname === link.href
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                "--link-hover-color":
                  "var(--text-primary)",
              } as CSSProperties}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
