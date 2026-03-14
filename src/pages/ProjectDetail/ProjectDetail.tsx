import { useParams } from "react-router-dom";
import { useProjectData } from "@/hooks/useProjectData";
import "@/styles/ProjectDetail.css";
import Hero from "@/components/Hero.tsx";

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
    <div className="project-detail">
      <Hero title={project.title} details={project.details} overview={project.overview} />
      <MarkdownComponent />
    </div>
  );
};

export default ProjectDetail;
