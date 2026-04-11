import { getAllProjects, getAllBlogPosts, getAllUpdates } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { UpdatesSection } from "@/components/sections/UpdatesSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function HomePage() {
  const projects = getAllProjects();
  const posts = getAllBlogPosts().slice(0, 3);
  const updates = getAllUpdates();

  return (
    <>
      <HeroSection />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid var(--border-light)" }} />
      </div>
      <ProjectsSection projects={projects} />
      <UpdatesSection updates={updates} />
      <BlogSection posts={posts} />
    </>
  );
}
