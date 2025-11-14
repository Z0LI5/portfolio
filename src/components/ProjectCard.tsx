import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string;
}

export default function ProjectCard({
  slug,
  title,
  date,
  summary,
  tags,
}: ProjectCardProps) {
  // Parse tags from comma-separated string
  const tagArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];

  return (
    <Link href={`/projects/${slug}`}>
      <div className="border border-neutral-200 rounded-xl p-6 hover:border-accent transition-colors bg-white">
        <h2 className="text-xl font-semibold group-hover:text-accent">
          {title}
        </h2>
        <p className="text-sm text-neutral-400 mt-1">{date}</p>

        {/* Tags */}
        {tagArray.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tagArray.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="mt-3 text-neutral-500">{summary}</p>
      </div>
    </Link>
  );
}
