import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Projekt nicht gefunden.</div>;
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.details}</p>
      <a href="/">Zurück zur Übersicht</a>
    </section>
  );
};

export default ProjectDetail;
