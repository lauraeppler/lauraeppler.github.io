import { useParams } from "react-router-dom";
import { useFetchProjectContent } from "../../projectData.ts";
import Hero from "@/components/Hero";
import MarkdownSection from "@/components/MarkdownSection";
import "@/styles/ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = useFetchProjectContent(id);

  if (project === undefined) {
    return (
      <section className="project-detail not-found">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className={`project-detail ${project.id}`}>
      <Hero {...project} />
      {project.sections.map((section, index) => (
        <MarkdownSection key={`${section.title}_${index}`} {...section} />
      ))}
    </section>
  );
};

export default ProjectDetail;
