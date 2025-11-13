import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export default function ProjectCard({
  slug,
  title,
  date,
  summary,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="border rounded-xl p-4 hover:shadow-md transition bg-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-700">{summary}</p>
      </div>
    </Link>
  );
}
