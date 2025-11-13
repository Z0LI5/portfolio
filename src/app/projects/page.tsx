import Link from "next/link";
import { getAllProjects } from "@/lib/markdown";

export default async function HomePage() {
  const projects = await getAllProjects(); // Already sorted!

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block group border border-neutral-200 rounded-2xl p-6 hover:border-accent transition-colors"
          >
            <h2 className="text-xl font-semibold group-hover:text-accent">
              {project.title}
            </h2>
            <p className="text-neutral-500 mt-2">{project.summary}</p>
            <p className="text-sm text-neutral-400 mt-1">{project.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
