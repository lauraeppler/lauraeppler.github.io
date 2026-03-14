import ProjectThumbnail from "@/components/ProjectThumbnail";
import { useProjectData } from "@/hooks/useProjectData.ts";
import "@/styles/ProjectList.css";

const ProjectList = () => {
  const projects = useProjectData();

  return (
    <section className="projects-section" id="projects">
      <h2>Meine Projekte</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <ProjectThumbnail key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
