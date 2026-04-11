"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <section id="projects" style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <SectionHeader
        label="Projects"
        title="Things I've built"
        description="A selection of tools, experiments, and side projects — mostly open-source."
      />

      {/* Tag filter */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <Tag
          label="All"
          active={activeTag === null}
          onClick={() => setActiveTag(null)}
        />
        {allTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", textAlign: "center", padding: "2rem 0" }}>
          No projects with that tag yet.
        </p>
      )}
    </section>
  );
}
