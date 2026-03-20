import { useParams } from "react-router-dom";
import { useProjectData } from "@/hooks/useProjectData";
import Hero from "@/sections/Hero.tsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = useProjectData(id);

  if (project === undefined) {
    return (
      <section className="project-detail not-found">
        <h1>Ups... kein Project gefunden</h1>
      </section>
    );
  }

  const MarkdownComponent = project.component;

  return (
    <>
      <Hero
        title={project.title}
        details={project.details}
        overview={project.overview}
      />
      <MarkdownComponent />
    </>
  );
};

export default ProjectDetail;
