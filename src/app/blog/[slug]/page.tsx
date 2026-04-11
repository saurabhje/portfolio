import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Tag } from "@/components/ui/Tag";
import { BackLink } from "@/components/ui/BackLink";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function MdxLink({
  href = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "8rem 1.5rem 6rem" }}>
      <BackLink href="/blog" label="All posts" />

      <header style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} small />
          ))}
        </div>
        <h1
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          {post.title}
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "520px" }}>
          {post.description}
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "0.78rem", color: "var(--text-muted)" }}>
          <time>{formatDate(post.date)}</time>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--border)", display: "inline-block" }} />
          <span>{post.readingTime}</span>
        </div>
      </header>

      <hr style={{ border: "none", borderTop: "1px solid var(--border-light)", marginBottom: "3rem" }} />

      <div className="prose" style={{ maxWidth: "620px" }}>
        {post.content && <MDXRemote source={post.content} components={{ a: MdxLink }} />}
      </div>

      <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-light)" }}>
        <BackLink href="/blog" label="Back to all posts" />
      </div>
    </div>
  );
}
