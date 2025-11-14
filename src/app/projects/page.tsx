import Link from "next/link";
import { getAllProjects } from "@/lib/markdown";
import ProjectCard from "@/components/ProjectCard";

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            date={project.date}
            summary={project.summary}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
