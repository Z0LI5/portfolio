import { getAllProjects, getProjectBySlug } from "@/lib/markdown";
import ProjectPageClient from "./ProjectPageClient";

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

  return <ProjectPageClient project={project} />;
}
