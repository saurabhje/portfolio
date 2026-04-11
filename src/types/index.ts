export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
  status: "active" | "archived" | "wip";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  content?: string;
}

export interface Update {
  id: string;
  date: string;
  content: string;
  tags?: string[];
  link?: string;
}
