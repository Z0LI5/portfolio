"use client";

import { useEffect } from "react";

interface ProjectPageClientProps {
  project: {
    slug: string;
    contentHtml: string;
    title: string;
    date: string;
    summary: string;
  };
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  useEffect(() => {
    // Load model-viewer on client side only
    import("@google/model-viewer");
  }, []);

  return (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-3xl font-bold text-accent mb-2">{project.title}</h1>
      <p className="text-neutral-500 text-sm mb-8">{project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}
