import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "Saurabh — Developer & Builder", template: "%s | Saurabh" },
  description: "Full-stack developer building thoughtful tools and interfaces. Writing about software, systems, and the craft of building things.",
  keywords: ["developer", "portfolio", "full-stack", "Next.js", "React"],
  authors: [{ name: "Saurabh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saurabh.codes",
    siteName: "Saurabh",
    title: "Saurabh — Developer & Builder",
    description: "Full-stack developer building thoughtful tools and interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh — Developer & Builder",
    description: "Full-stack developer building thoughtful tools and interfaces.",
    creator: "@cachesaur",
  },
  icons:{
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
