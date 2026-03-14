import { useFetchProjectContent } from "../projectData.ts";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import "@/styles/App.css";

const ProjectList = () => {
  const projects = useFetchProjectContent();

  return (
    <section className="projects" id="projects">
      <h2>Meine Projekte</h2>
      <div className="project-list">
        {projects &&
          projects.map((project, idx) => (
            <ProjectThumbnail key={idx} {...project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectList;
