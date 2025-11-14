"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProjectPageClientProps {
  project: {
    slug: string;
    contentHtml: string;
    title: string;
    date: string;
    summary: string;
    tags?: string;
  };
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  useEffect(() => {
    // Load model-viewer on client side only
    import("@google/model-viewer");
  }, []);

  const router = useRouter();

  return (
    <article className="prose prose-neutral max-w-none">
      <button
        onClick={() => router.push("/projects")}
        className="mb-6 px-4 py-2  rounded-lg hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
      >
        <span>←</span>
        <span>Back to Projects</span>
      </button>

      <h1 className="text-3xl font-bold text-accent mb-2">{project.title}</h1>
      <p className="text-neutral-500 text-sm mb-8">{project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}
