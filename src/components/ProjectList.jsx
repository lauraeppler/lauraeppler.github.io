import React from "react";
import "../App.css";
import { useFetchProjectContent } from "../projectData";

import Project from "./Project";

const ProjectList = () => {
  const projects = useFetchProjectContent();
  console.log("projects", projects);
  return (
  <section className="projects">
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
