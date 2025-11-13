import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/markdown";

export default async function HomePage() {
  const projects = await getAllProjects();

  return <h1> Hi I'm Nikhil</h1>;
}
