import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";

// ✅ Now points to src/projects
const projectsDir = path.join(process.cwd(), "src", "projects");

export async function getAllProjects() {
  if (!fs.existsSync(projectsDir)) {
    console.warn(
      "⚠️ 'src/projects' directory not found. Returning empty list."
    );
    return [];
  }

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(projectsDir, filename),
      "utf8"
    );
    const { data } = matter(fileContent);
    return { slug, ...data } as {
      slug: string;
      title: string;
      date: string;
      summary: string;
    };
  });

  // ✅ Sort by date (newest first)
  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkGfm) // ✅ GitHub Flavored Markdown (tables, strikethrough, task lists)
    .use(remarkSlug) // ✅ Adds id attributes to headings
    .use(remarkAutolinkHeadings, {
      behavior: "wrap", // Wraps heading text in a link
      properties: {
        className: ["heading-link"], // Adds class for styling
      },
    })
    .use(html, { sanitize: false }) // ✅ Allows raw HTML if needed
    .process(content);
  const contentHtml = processedContent.toString();

  return { slug, contentHtml, ...data };
}
