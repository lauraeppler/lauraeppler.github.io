import React from "react";
import "../App.css";

import Project from "./Project";

const ProjectList = ({ projects }) => (
  <section className="projects">
    <h2>Meine Projekte</h2>
    <div className="project-list">
      {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectList;
