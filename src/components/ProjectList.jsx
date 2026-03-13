import "../App.css";
import { useFetchProjectContent } from "../projectData";

import Project from "./Project";

const ProjectList = () => {
  const projects = useFetchProjectContent();
 
  return (
  <section className="projects" id="projects">
    <h2>Meine Projekte</h2>
    <div className="project-list">
      {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  </section>
  )
};

export default ProjectList;
