import Layout from "@/components/Layout";
import { getAllProjects, getProjectBySlug } from "@/lib/markdown";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-3xl font-bold text-accent mb-2">{project.title}</h1>
      <p className="text-neutral-500 text-sm mb-8">{project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}
